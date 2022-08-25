import { useRouter } from "next/router";
import Link from "next/link";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation, Trans } from "next-i18next";

import Layout from "../components/layout";

const About = () => {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <>
      <h6>{t("about.title")}</h6>

      <button
        onClick={() => {
          console.log("router.locale: ", router.locale);
          router.push("/about", "/about", { locale: "de" });
        }}
      >
        Change locale
      </button>
    </>
  );
};

About.getLayout = (page) => <Layout meta={{}}>{page}</Layout>;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
      // Will be passed to the page component as props
    },
  };
}

export default About;
