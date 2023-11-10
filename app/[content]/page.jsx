import getContentMetadata from "@/constants/getContentMetadata";
import { contentData } from "@/constants";
import Error from "@/components/Error";
import RedirectFunction from "@/components/RedirectFunction";
const getContent = async (slug) => {
  const contentJson = contentData.find((content) => content.slug === slug);
  if (!contentJson) {
    return (
      <RedirectFunction />
    );
  } else {
    try {
      const { slug } = contentJson;
      const Mymodule = await import(`../../content/${slug}`);
      const ContentComponent = Mymodule.default;
      return <ContentComponent />;
    } catch (error) {
      console.log(error);
      return (
        <RedirectFunction />
      );
      
    }
  }
};

const ContentPage = async (props) => {
  const slug = props.params.content;
  const content = await getContent(slug);
  const contentJson = contentData.find((content) => content.slug === slug);
 
  if (!contentJson) {
    return (
    <RedirectFunction />
    );
  }

  return (
    <>
    <div className="container mx-auto ">
      <div className="mx-auto w-full max-w-4xl p-2 sm:p-5 lg:p-8 px-3 ">
        <div className="mt-24">{content}</div>
      </div>
    </div>
    </>
  );
};

export const generateStaticParams = async () => {
  const contents = getContentMetadata();
  return contents.map((post) => ({
    slug: post.slug,
  }));
};

export async function generateMetadata(props) {
  const posts = getContentMetadata();
  const slug = props.params.content;
  const post = posts.find((post) => post.slug === slug);
  if (post) {
    return {
      title: post.title,
      description: post.description,
      openGraph: {
        title: post.openGraph.title,
        description: post.openGraph.description,
        images: post.openGraph.images,
        url: post.openGraph.url,
        locale: post.openGraph.locale,
        type: post.openGraph.type,
        site_name:post.openGraph.site_name,
        publishedTime: post.openGraph.publishedTime,
        authors: post.openGraph.authors,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
}

export default ContentPage;
