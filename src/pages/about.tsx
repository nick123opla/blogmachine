import MetaConfig from "src/components/MetaConfig";
import { NextPageWithLayout } from "../types";
import CustomError from "src/routes/Error"; // Импорт ошибки, если нужно
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  // Здесь можно настроить статические данные для страницы "О себе"
  return {
    props: {
      // Передайте нужные данные здесь
    },
    revalidate: 10, // Установите время повторной генерации
  };
};

const AboutPage: NextPageWithLayout = () => {
  const meta = {
    title: "О себе", // Заголовок страницы
    description: "Информация о вас", // Описание страницы
    type: "website",
    url: "ваша-ссылка", // Ваша ссылка
  };

  return (
    <>
      <MetaConfig {...meta} />
      <div style={{ padding: "20px" }}>
        <h1>О себе</h1>
        <p>Здесь вы можете написать информацию о себе, своем опыте, увлечениях и т.д.</p>
        <p>Например, вы можете рассказать о своей профессиональной деятельности, образовании и целях.</p>
      </div>
    </>
  );
};

AboutPage.getLayout = (page) => {
  return <>{page}</>; // Если вы используете какой-то общий макет
};

export default AboutPage;
