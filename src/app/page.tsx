import pageStyle from "@/app/page.module.css";
import { isMobile } from 'react-device-detect';
import MobileSubmissionForm from "./components/MobileSubmissionForm";
import NonMobileSubmissionForm from "./components/NonMobileSubmissionForm";

export default function Home() {

  return (
    <>
      <h1 className={pageStyle.title}>
        Imas<span className={pageStyle.typograph}>Cord</span>Hub
      </h1>
      <p className={pageStyle.description}>Discord server, Unofficial fansite, All in One.</p>

      <div className={`${pageStyle.section} ${pageStyle.sectionTitle} recently-added`}>
        <h2>Recently added</h2>
      </div>

      <div className={`${pageStyle.section} ${pageStyle.sectionTitle} server-list`}>
        <h2>Discord server list</h2>
      </div>

      <div className={`${pageStyle.section} ${pageStyle.sectionTitle} fansite-list`}>
        <h2>Fansite list</h2>
      </div>

      <div className={`${pageStyle.section} ${pageStyle.sectionTitle} about`}>
        <h2>About</h2>

        <p>
          ImasCordHub is the unofficial union site of the Discord server and fansite of the game "THE IDOLM@STER" series.
        </p>
      </div>

      <div className={`${pageStyle.section} ${pageStyle.sectionTitle} For owners`}>
        <h2>For owners</h2>

        <p>
          If you are the owner of the Discord server or fansite and want to register, please use the form below.
        </p>
        <p>
          And we strongly appliciate if you can put the link to this site on your server or site.
        </p>

        <div className={pageStyle.form}>
          {isMobile ? <MobileSubmissionForm /> : <NonMobileSubmissionForm />}
        </div>
      </div>
    </>
  );
}
