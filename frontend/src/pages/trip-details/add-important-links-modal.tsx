import { X, Tag, Link2 } from "lucide-react";
import { Button } from "../../components/button";
import { FormEvent } from "react";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";

interface AddImportantLinksModalProps {
  closeImportantLinksModal: () => void,
}

export function AddImportantLinksModal({
  closeImportantLinksModal
}: AddImportantLinksModalProps) {
  const { tripId } = useParams()

  //request api
  async function CreateImportantLink(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const title = data.get('title')?.toString()
    const url = data.get('url')?.toString()

    await api.post(`/trips/${tripId}/links`, {title, url})

    window.document.location.reload()
  }


  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar link</h2>
            <button type="button">
              <X className="size-5 text-zinc-400" onClick={closeImportantLinksModal} />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar os links importantes
          </p>
        </div>

        <form onSubmit={CreateImportantLink} className="space-y-3">
          <div className="h-14 px-4 flex items-center gap-2 flex-1 bg-zinc-950 border border-zinc-800 rounded-lg">
            <Tag className="text-zinc-400 size-5" />
            <input
              name="title"
              placeholder="Titulo do link"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>

          <div className="h-14 px-4 flex items-center gap-2 bg-zinc-950 border border-zinc-800 rounded-lg flex-1">
            <Link2 className="text-zinc-400 size-5" />
            <input
              type="url"
              name="url"
              placeholder="URL"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 "
            />
          </div>

          <Button variant="primary" size="full">
            Salvar link
          </Button>
        </form>
      </div>
    </div>
  )
}