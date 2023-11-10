import getBlogMetadata from "@/constants/getBlogMetadata";
import { blogData } from "@/constants";
import Error from "@/components/Error";

const getBlogContent = async (slug) => {
  const blogJson = blogData.find((blog) => blog.slug === slug);
  if (!blogJson) {
    return <Error />;
  } else {
    try {
      const { slug } = blogJson;
      const Mymodule = await import(`../../../blog/${slug}`);
      const ContentComponent = Mymodule.default;
      return <ContentComponent />;
    } catch (error) {
      console.log(error);
      return <Error />;
    }
  }
};

const BlogPage = async (props) => {
  const slug = props.params.slug;
  const blogContent = await getBlogContent(slug);
  const blogJson = blogData.find((content) => content.slug === slug);
  if (!blogJson) {
    return <Error />;
  }

  return (
    <div className="h-auto mt-12">
      <div className="mt-14 px-2 sm:px-6 md:px-10 lg:px-20 xl:px-32">
        <div className="mx-auto w-full max-w-3xl p-2 sm:p-5 lg:p-8 lg:col-span-2">
          <div className="flex justify-between mb-4">
            <p className="text-orange-600">{blogJson.date}</p>
            <p className="text-green-600">{blogJson.read} min read</p>
          </div>
          <div>{blogContent}</div>
        </div>
      </div>
    </div>
  );
};

export const generateStaticParams = async () => {
  const blogs = getBlogMetadata();
  return blogs.map((post) => ({
    slug: post.slug,
  }));
};

export async function generateMetadata(props) {
  const blogs = getBlogMetadata();
  const slug = props.params.slug;
  const blog = blogs.find((post) => post.slug === slug);
  if (blog) {
    return {
      slug,
      title: blog.title,
      description: blog.description,
      image: blog.image,
      date: blog.date,
      author: blog.author,
      openGraph: {
        title: blog.openGraph.title,
        description: blog.openGraph.description,
        images: blog.openGraph.images,
        url: blog.openGraph.url,
        locale: blog.openGraph.locale,
        type: blog.openGraph.type,
        site_name: blog.openGraph.site_name,
        publishedTime: blog.openGraph.publishedTime,
        authors: blog.openGraph.authors,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
}
export default BlogPage;
