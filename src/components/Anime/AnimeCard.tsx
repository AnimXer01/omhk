import path from "@/src/utils/path";
import Link from "next/link";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface AnimeCardProps {
  title: string;
  type: string;
  image: string;
  id: string;
  color: string;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ image, title, id, color }) => {
  return (
    <Link href={path.anime(id)}>
      <div>
        <LazyLoadImage
          width="100%"
          src={image}
          effect="blur"
          className="aspect-[124/185] rounded-[4px]"
        />
      </div>
    </Link>
  );
};

export default AnimeCard;
