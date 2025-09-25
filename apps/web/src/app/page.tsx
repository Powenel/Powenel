import Image from "next/image";
import * as motion from "motion/react-client";

import { Button } from "@repo/ui";

export default function Page() {
  return (
    <>
      <section>
        <div className="flex flex-col items-center space-y-12">
          <div className="text-center">
            <h1 className="text-9xl">Vazen</h1>
            <p>A strict monorepo starter to kickstart projects, ideas, and experiments.</p>
          </div>
          <HeroImage />
          <Button>Button</Button>
        </div>
      </section>
    </>
  );
}

function HeroImage() {
  return (
    <motion.div
      className="h-[380px] w-[300px]"
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      animate={{ clipPath: "inset(0 0 0% 0)" }}
      transition={{ duration: 0.3 }}
    >
      <Image
        draggable={false}
        src={"/images/62b9cda2-886c-4bdb-955e-058de7424ca9.webp"}
        alt="a glowing flower"
        className="border-eigengrau-600 border object-cover p-1"
        width={300}
        height={400}
      />
    </motion.div>
  );
}
