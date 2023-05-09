import { groq } from "next-sanity";
import { client } from "../../../../sanity/lib/client";
import Image from "next/image";
import urlFor from "../../../../sanity/lib/urlFor";
import category from "../../../../sanity/schemas/category";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../../../components/RichTextComponents";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 70;

export async function generateStaticParams() {
    const query = groq`*[_type=='post'] {
        slug
    }`;

    const slugs: Post[] = await client.fetch(query);
    const slugRoutes = slugs.map((slug) => slug.slug.current);

    return slugRoutes.map(slug => ({
        slug,
    }) );
}

export default async function Post({ params: { slug } }: Props) {
  const query = groq`
    *[_type == 'post' && slug.current == $slug] [0]
    {
      ...,
      author->,
      categories[]->
    }
  `;
  const post: Post = await client.fetch(query, { slug });
  return (
    <article className="px-10 pb-28">
      <section className="space-y-2 border-[#EA4242] text-white relative">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
            <Image
              className="object-cover object-center mx-auto"
              src={
                post.author.image
                  ? urlFor(post.author.image).url()
                  : "/fallback-image.png"
              }
              alt={post.author.name}
              fill
            />
          </div>
          <section className="p-5 bg-[#EA4242] w-full">
            <div className="flex justify-end items-center space-x-2">
              <Image
                className="rounded-full"
                src={
                  post.author.image
                    ? urlFor(post.author.image).url()
                    : "/fallback-image.png"
                }
                alt={post.author.name}
                height={40}
                width={40}
              />
              <h3 className="text-lg font-bold">{post.author.name}</h3>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div>
                <h1 className="text-4xl font-extrabold">{post.title}</h1>
                <p>
                  {new Date(post._createdAt).toLocaleDateString("en-AU", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
            <div>
              <h2 className="italic pt-10">{post.description}</h2>
              <div className="flex items-center justify-end mt-auto space-x-2">
                {post.categories.map((category) => (
                  <p
                    key={category._id}
                    className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4"
                  >
                    {category.title}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

    <PortableText value={post.body} components={RichTextComponents} />

    </article>
  );
}
