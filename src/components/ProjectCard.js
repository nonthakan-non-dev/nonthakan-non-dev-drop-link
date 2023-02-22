import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const ProjectCard = ({ data }) => {
  const { img, title, description, url } = data;
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <Card className="w-auto">
        <CardHeader floated={false} className="h-[200px] flex justify-center">
          <img
            src={
              img ??
              "https://firebasestorage.googleapis.com/v0/b/nonthakan-non-dev.appspot.com/o/asset%2Fcommon%2Fno-image.png?alt=media&token=97f025fe-10d5-4a52-8430-1b3ff38ef06c"
            }
            alt=""
            className="object-contain"
          />
        </CardHeader>
        <CardBody className="text-center px-4 py-2">
          <Typography
            variant="h5"
            color="blue-gray"
            className="my-3 line-clamp-1"
          >
            {title ?? "-"}
          </Typography>
          <Typography
            color="blue"
            className="text-start font-medium line-clamp-2"
            textGradient
          >
            {description ?? "-"}
          </Typography>
        </CardBody>
      </Card>
    </a>
  );
};

export default ProjectCard;
