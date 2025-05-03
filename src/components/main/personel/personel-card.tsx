import Image from "next/image";
import { motion } from "framer-motion";

type PersoneCardProps = {
  img: string;
  name: string;
  role: string;
  id: number;
};

const personelVariant = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};


const PersonelCard = ({ img, name, role, id }: PersoneCardProps) => {
  return (
    <motion.div
      variants={personelVariant}
      initial="hidden"
      whileInView="visible"
      custom={id}
      viewport={{once:true}}
      className="relative flex-1 w-full aspect-square group overflow-hidden border-2 border-rose-400 rounded shadow"
    >
      <Image
        src={`/images/personel/${img}`}
        alt=" "
        fill
        className="object-cover rounded shadow "
      />
      <div className="bg-slate-800/60 absolute grid place-items-center size-full z-50 top-0 left-0 scale-x-0 group-hover:scale-x-100  group-focus:scale-x-100 transition-all duration-300">
        <div className="w-1/2 bg-white dark:bg-slate-800 p-4 rounded-tl-none rounded text-center absolute translate-y-[500px] group-hover:translate-y-0 transition-all duration-500">
          <p> {name}</p>
          <p className="absolute -top-[57%] rounded left-0 px-3 py-1 bg-rose-500 text-white">
            {role}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default PersonelCard;
