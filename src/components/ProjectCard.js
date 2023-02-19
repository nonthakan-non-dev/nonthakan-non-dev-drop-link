import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const ProjectCard = ({ img, title, tool }) => {
  return (
    <Card className="w-96">
      <CardHeader floated={false} className="h-56">
        <img
          src={
            img ??
            "https://firebasestorage.googleapis.com/v0/b/nonthakan-non-dev.appspot.com/o/asset%2Fcommon%2Fno-image.png?alt=media&token=97f025fe-10d5-4a52-8430-1b3ff38ef06c"
          }
          alt=""
          className="object-cover"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {title ?? "-"}
        </Typography>
        <Typography color="blue" className="font-medium" textGradient>
          {tool ?? "-"}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
