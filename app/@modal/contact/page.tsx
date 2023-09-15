import Home from "@/app/(simple)/page";
import ContactModal from "../../../components/ContactModal";
import WebDevelopment from "@/app/web-development/page";
import WebDevelopmentLayout from "@/app/web-development/layout";
import SimpleLayout from "@/app/(simple)/layout";

export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <>
      {searchParams.source === 'web-development'
        ? <WebDevelopmentLayout>
          <WebDevelopment />
        </WebDevelopmentLayout>
        : <SimpleLayout>
          <Home />
        </SimpleLayout>}
      <ContactModal />
    </>
  )
}
