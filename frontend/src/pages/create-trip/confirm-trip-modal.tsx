import { Mail, User, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

interface ConfirmTripModalProps {
  closeConfirmTripModal: () => void
  createTrip: (event: FormEvent<HTMLFormElement>) => void,
  setOwnerName: (name: string) => void
  setOwnerEmail: (email: string) => void
}

export function ConfirmTripModal({
  closeConfirmTripModal,
  createTrip,
  setOwnerName,
  setOwnerEmail
}: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Confirmar participação</h2>
            <button type="button">
              <X className="size-5 text-zinc-400" onClick={closeConfirmTripModal} />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Você foi convidado(a) para participar de uma viagem para <span className="font-semibold text-zinc-100">Florianópolis, Brasil</span> nas datas de <span className="font-semibold text-zinc-100">16 a 27 de Agosto de 2024.</span>
          </p>
        </div>

        <form onSubmit={createTrip} className="space-y-3">
          <div className="h-14 px-4 flex items-center gap-2 flex-1 p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg">
            <User className="text-zinc-400 size-5" />
            <input
              type="text"
              name="name"
              placeholder="Seu nome completo"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              onChange={(e) => setOwnerName(e.target.value)}
            />
          </div>

          <div className="h-14 px-4 flex items-center gap-2 flex-1 p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg">
            <Mail className="text-zinc-400 size-5" />
            <input
              type="email"
              name="email"
              placeholder="Seu email"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              onChange={(e) => setOwnerEmail(e.target.value)}
            />
          </div>

          <Button type="submit" size="full">
            Confirmar criacao da viagem
          </Button>
        </form>
      </div>
    </div>
  )
}