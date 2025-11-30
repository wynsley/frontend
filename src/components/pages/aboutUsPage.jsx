import { MyTemplate } from "../templates/myTemplate"
import { AboutUsHeroSection } from "../organisms/aboutUs/aboutUsHeroSection"

function AbouUsPage() {
  return (
    <MyTemplate>
      <AboutUsHeroSection />
    </MyTemplate>
  )
}

export { AbouUsPage }