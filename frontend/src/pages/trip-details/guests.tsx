import { CheckCircle2, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";

interface GuestsProps {
  id: string,
  name: string | null,
  email: string,
  is_confirmed: boolean
}

export function Guests() {
  const { tripId } = useParams()
  const [tripGuests, setTripGuests] = useState<GuestsProps[] | undefined>()

  useEffect(() => {
    api.get(`/trips/${tripId}/participants`).then(response => setTripGuests(response.data.participants))
  }, [tripId])

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-5">
        {tripGuests && tripGuests.map((guest, index) => (
          <div key={guest.id} className="flex items-center justify-between gap-4">
            <div className="space-y-1.5 flex-1">
              <span className="block font-medium text-zinc-100">{guest.name ?? `Convidado ${index}`}</span>
              <span className="block text-sm text-zinc-400 truncate">
                {guest.email}
              </span>
            </div>
            {guest.is_confirmed ? (
              <CheckCircle2 className="text-green-400 size-5" />
            ) : (
              <CircleDashed className="text-zinc-400 size-5" />
            )}
          </div>
        ))}

      </div>
      <Button variant="secondary" size="full">
        <UserCog className="size-5" />
        Gerenciar Convidados
      </Button>
    </div>
  )
}