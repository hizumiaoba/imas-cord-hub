import pageStyle from "@/app/page.module.css";
import { isMobile } from "react-device-detect";
import { NonMobileSubmissionForm, MobileSubmissionForm } from "@/app/components/";
import Link from "next/link";

const style = {
  width: "160px",
  fontFamily: "JetBrains Mono",
  fontSize: "16px",
  cursor: "pointer",
  borderRadius: "10px",
  margin: "10px",
  padding: "15px",
}

export const OwnerNotice = async () => {
  return (
    <>
      <div
        className={`${pageStyle.section} ${pageStyle.sectionTitle} for-owners`}
      >
        <h2>For owners</h2>

        <p>
          If you are the owner of the Discord server or fansite and want to
          register, please use the form below.
        </p>

        <button type="button" style={style}>
          <Link href={"https://forms.gle/tDhLwWGgU7ajgyjJ8"} style={{color: "black", textDecorationLine: "none"}}>
            Register!
          </Link>
        </button>

        <p>
          And we strongly appreciate if you can put the link to this site on
          your server or site.
        </p>

      </div>
    </>
  );
};
