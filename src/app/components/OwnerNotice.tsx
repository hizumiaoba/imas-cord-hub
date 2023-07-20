import pageStyle from "@/app/page.module.css";
import { isMobile } from "react-device-detect";
import { NonMobileSubmissionForm, MobileSubmissionForm } from "@/app/components/";

export const OwnerNotice = async () => {
  return (
    <>
      <div
        className={`${pageStyle.section} ${pageStyle.sectionTitle} For owners`}
      >
        <h2>For owners</h2>

        <p>
          If you are the owner of the Discord server or fansite and want to
          register, please use the form below.
        </p>
        <p>
          And we strongly appliciate if you can put the link to this site on
          your server or site.
        </p>

        <div className={pageStyle.form}>
          {isMobile ? <MobileSubmissionForm /> : <NonMobileSubmissionForm />}
        </div>
      </div>
    </>
  );
};
