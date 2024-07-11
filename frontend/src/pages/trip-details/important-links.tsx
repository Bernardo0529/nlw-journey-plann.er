import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";

interface ImportantLinksProps {
  openAddImportantLinksModal: () => void
}

interface Link {
  id: string,
  title: string,
  url: string
}

export function ImportantLinks({
  openAddImportantLinksModal
}: ImportantLinksProps) {
  const { tripId } = useParams()
  const [links, setLinks] = useState<Link[]>([])

  useEffect(() => {
    api.get(`/trips/${tripId}/links`).then(response => setLinks(response.data.links))
  }, [tripId])

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>

      {links && links.map(link => {
        return (
          <div className="space-y-5">
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-1.5 flex-1">
                <span className="block font-medium text-zinc-100">{link.title}</span>
                <a className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
                  {link.url}
                </a>
              </div>
              <Link2 className="text-zinc-400 size-5" />
            </div>
          </div>
        )
      })}


      <Button onClick={openAddImportantLinksModal} variant="secondary" size="full">
        <Plus className="size-5" />
        Cadastrar novo link
      </Button>
    </div>
  )
}