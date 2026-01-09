export interface Publication {
  title: string;
  publisher: string;
  publicationType?: string; // Conference / Journal
  date: string;
  link: string;
  doi?: string;
  abstract?: string;
}

export const publications: Publication[] = [
  {
    title: "TEXT-IT: A Secure Web Chat Application",
    publisher: "IEEE",
    publicationType: "Conference Paper",
    date: "Nov 2024",
    link: "https://ieeexplore.ieee.org/document/10724095",
    doi: "10.1109/ICCCNT61001.2024.10724095",
    abstract:
      "This paper introduces a secure web chat application that leverages steganography, a technique for concealing messages within images, to ensure secure and covert communication. The application integrates the MERN stack (MongoDB, Express.js, React.js, and Node.js) for robust development and employs the Least Significant Bit (LSB) algorithm for steganography. The paper delves into the intricate details of the application's architecture, encompassing modular design, user authentication, real-time chat functionality, steganography integration, user interface, back-end server operations, database management, and security considerations. Additionally, it explores potential future enhancements, including video chat, group chat, and more sophisticated steganographic methods. This research offers a comprehensive overview of a web chat application that prioritizes user privacy and data security through steganographic integration.",
  },
];
