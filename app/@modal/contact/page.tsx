import Home from "@/app/page";
import ContactModal from "../../components/ContactModal";
import WebDevelopment from "@/app/web-development/page";

export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <>
      {searchParams.source === 'web-development' ? <WebDevelopment /> : <Home />}
      <ContactModal />
    </>
  )
}
