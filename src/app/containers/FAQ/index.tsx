import FAQContainer from "./components/FAQContainer";
import { FAQQuerries } from "./data/data";
import { GradientHeading } from "./FAQ.styles";
import { Content } from "../../common/Content";

export function FAQ() {
  const mappedFAQQuerries = FAQQuerries.map((faq) => (
    <FAQContainer FAQHeader={faq.FAQTitle} FAQText={faq.FAQText} />
  ));
  return (
    <main className="w-full max-w-9xl mx-auto max-h-min flex flex-col justify-center  items-center text-center">
      <Content>
        <GradientHeading>Your questions answered</GradientHeading>
        <p className="mt-5 text-[#222222]  text-[20px]">
          You can also contact us at quarrychain@gmail.com
        </p>
      </Content>
      <div className="w-full max-w-7xl mx-auto  flex flex-col first:gap-y-0 gap-y-10 justify-center items-center mb-10">
        {mappedFAQQuerries}
      </div>
    </main>
  );
}
