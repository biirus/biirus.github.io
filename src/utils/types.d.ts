type FileInfo = {
  date: string;
  title: string;
  url: string;
  tags: string[];
};

type DirInfo = {
  title: string;
};

type Dir = {
  files: Array<FileInfo | Dir>;
  isDir: boolean;
  info: DirInfo;
};

type Page = {
  content: string;
  meta: {
    content: string;
    data: FileInfo;
    isEmpty: boolean;
  };
};