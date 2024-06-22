"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "7994713815",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "abin123@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Chengannur, Alappuzha, Kerala",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          alert("Message Sent, We will get back to you shortly");
        },
        (error) => {
          alert("An error occurred, Please try again");
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/68">
                MERN Stack Web Developer skilled in MongoDB, Express.js, React,
                and Node.js to build dynamic, scalable web applications. You
                will collaborate with our design and backend teams to deliver
                seamless user experiences. Strong problem-solving skills and
                attention to detail are essential. Join our innovative team and
                contribute to exciting, cutting-edge projects.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* select */}
              <Select
                name="service"
                onValueChange={(value) =>
                  setFormData({ ...formData, service: value })
                }
                required
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web-development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                    <SelectItem value="app-development">
                      App Development
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="h-[200px]"
                placeholder="Type your message here."
                required
              />
              {/* btn */}
              <Button size="md" className="max-w-40" type="submit">
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0"></div>
          <ul className="flex flex-col gap-10">
            {info.map((item, index) => (
              <li key={index} className="flex items-center gap-6">
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                  <div className="text-[28px]">{item.icon}</div>
                </div>
                <div className="flex-1">
                  <p className="text-white/60">{item.title}</p>
                  <h3 className="text-xl">{item.description}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;


// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
// import { motion } from "framer-motion";
// import emailjs from "emailjs-com";

// const info = [
//   {
//     icon: <FaPhoneAlt />,
//     title: "Phone",
//     description: "7994713815",
//   },
//   {
//     icon: <FaEnvelope />,
//     title: "Email",
//     description: "abin123@gmail.com",
//   },
//   {
//     icon: <FaMapMarkedAlt />,
//     title: "Address",
//     description: "Chengannur, Alappuzha, Kerala",
//   },
// ];

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     phone: "",
//     service: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .send(
//         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
//         process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
//         formData,
//         process.env.NEXT_PUBLIC_EMAILJS_USER_ID
//       )
//       .then(
//         (result) => {
//           alert("Message Sent, We will get back to you shortly");
//         },
//         (error) => {
//           alert("An error occurred, Please try again");
//         }
//       );
//   };

//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       animate={{
//         opacity: 1,
//         transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
//       }}
//       className="py-6"
//     >
//       <div className="container mx-auto">
//         <div className="flex flex-col xl:flex-row gap-[30px]">
//           <div className="xl:w-[54%] order-2 xl:order-none">
//             <form
//               onSubmit={handleSubmit}
//               className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
//             >
//               <h3 className="text-4xl text-accent">Let's work together</h3>
//               <p className="text-white/68">
//                 MERN Stack Web Developer skilled in MongoDB, Express.js, React,
//                 and Node.js to build dynamic, scalable web applications. You
//                 will collaborate with our design and backend teams to deliver
//                 seamless user experiences. Strong problem-solving skills and
//                 attention to detail are essential. Join our innovative team and
//                 contribute to exciting, cutting-edge projects.
//               </p>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <Input
//                   type="text"
//                   name="firstname"
//                   placeholder="Firstname"
//                   value={formData.firstname}
//                   onChange={handleChange}
//                   required
//                 />
//                 <Input
//                   type="text"
//                   name="lastname"
//                   placeholder="Lastname"
//                   value={formData.lastname}
//                   onChange={handleChange}
//                   required
//                 />
//                 <Input
//                   type="email"
//                   name="email"
//                   placeholder="Email address"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//                 <Input
//                   type="text"
//                   name="phone"
//                   placeholder="Phone number"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <Select
//                 name="service"
//                 onValueChange={(value) =>
//                   setFormData({ ...formData, service: value })
//                 }
//                 required
//               >
//                 <SelectTrigger className="w-full">
//                   <SelectValue placeholder="Select a service" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectGroup>
//                     <SelectLabel>Select a service</SelectLabel>
//                     <SelectItem value="web-development">
//                       Web Development
//                     </SelectItem>
//                     <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
//                     <SelectItem value="app-development">
//                       App Development
//                     </SelectItem>
//                   </SelectGroup>
//                 </SelectContent>
//               </Select>
//               <Textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="h-[200px]"
//                 placeholder="Type your message here."
//                 required
//               />
//               <Button size="md" className="max-w-40" type="submit">
//                 Send message
//               </Button>
//             </form>
//           </div>
//           <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
//             <ul className="flex flex-col gap-10">
//               {info.map((item, index) => (
//                 <li key={index} className="flex items-center gap-6">
//                   <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
//                     <div className="text-[28px]">{item.icon}</div>
//                   </div>
//                   <div className="flex-1">
//                     <p className="text-white/60">{item.title}</p>
//                     <h3 className="text-xl">{item.description}</h3>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Contact;
