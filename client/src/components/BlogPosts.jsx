import linkLogo from "../assets/link-solid.svg";

function BlogPosts(props) {
  return (
    <>
      <div className="w-[1440px] mx-auto mb-10 pl-40">
        {props.postListState.map((blog) => {
          return (
            <div className="flex gap-8 mt-10" key={blog.eid}>
              <div className="w-[350px] h-[250px] rounded-3xl overflow-hidden object-cover object-center">
                <img src={blog.photos[0]} alt="" className="w-full h-full" />
              </div>
              <div className="flex flex-col gap-1 relative">
                <h3 className="text-2xl font-bold">{blog.title}</h3>
                <p className="text-gray-500">
                  {blog.description.slice(0, 100)}
                  <span className="ml-2 text-sky-500">...</span>
                </p>
                <a href={blog.url} target="_blank" className="text-sky-500 underline">
                  อ่านต่อ
                </a>
                <div className="flex gap-2 text-gray-500">
                  <p>หมวด</p>
                  {blog.tags.map((tag, index) => {
                    return blog.tags[blog.tags.length - 1] !== tag ? (
                      <p className="underline" key={index}>
                        {tag}
                      </p>
                    ) : (
                      <div className="flex gap-2 " key={index}>
                        <span>และ</span>
                        <p className="underline">{tag}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="flex gap-8 mt-3">
                  {blog.photos.slice(1).map((photo, index) => {
                    return (
                      <div
                        key={index}
                        className="w-[100px] h-[100px] rounded-xl overflow-hidden object-cover object-center"
                      >
                        <img src={photo} alt="" className="w-full h-full" />
                      </div>
                    );
                  })}
                </div>
                <div className=" absolute bottom-3 left-[36rem] py-2 px-1 hover:cursor-pointer border-4 border-cyan-500 rounded-full">
                  <img src={linkLogo} alt="" className="w-10 " />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default BlogPosts;
