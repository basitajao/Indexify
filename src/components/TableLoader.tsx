import ContentLoader from "react-content-loader";

export const TableLoader = (props: any) => (
  <ContentLoader
    width={2000}
    height={550}
    viewBox="0 0 600 550"
    backgroundColor="#eaeced"
    foregroundColor="#ffffff"
    {...props}
  ></ContentLoader>
);
