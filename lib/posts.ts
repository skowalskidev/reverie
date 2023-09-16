import fs from 'fs'
import path from 'path'

const postsDirectory = path.join(process.cwd(), 'posts')

export async function getSortedPostsData() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = [];

  for (const fileName of fileNames) {
    const id = fileName.replace(/\.tsx$/, '');
    const PostComponent = (await import(`../posts/${id}`)).default;
    const metadata = PostComponent.metadata;

    allPostsData.push({
      id,
      ...metadata
    });
  }

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.tsx$/, ''),
      },
    }
  })
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.tsx`);

  // Dynamically import the component
  const PostComponent = (await import(`posts/${id}`)).default;

  // Access metadata
  const metadata = PostComponent.metadata;

  return {
    id,
    PostComponent,
    ...metadata
  };
}

