var {Deta}=require('deta')
const studentData = [
    {
        id:1,
        name: "Akshay",
        rollno: "20BCS059",
        skills: ["HTML", "ReactJS", "NextJS"],
        email:'20bcs059@nith.ac.in',
        phone: "+91-79-7152 4947",
        website: "www.google.com",
        address: "Vill- Gulabpura, PO- Panjehra, Teh- Nalagarh, Distt- Solan (HP) - 174101",
        education: ["Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996", "PGDM, (MBA with concentration in Marketing & Finance), Indian Institute of Management, Ahmedabad, India, 1987-1989", "Bachelor of Technology , Chemical Engg, Indian Institute of Technology, Kanpur, India, 1982-1986"],
        about: "Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ipsa earum aspernatur numquam ex alias hic magni exercitationem, unde sit enim facere distinctio eius aperiam molestiae autem eos a ab qui voluptatem!"
    },
    {
        id:1,
        name: "Shyam",
        rollno: "20BCS070",
        skills: ["HTML", "ReactJS", "NextJS"],
        email:'20bcs070@nith.ac.in',
        phone: "+91-79-7152 4947",
        website: "www.google.com",
        address: "Vill- Gulabpura, PO- Panjehra, Teh- Nalagarh, Distt- Solan (HP) - 174101",
        education: ["Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996", "PGDM, (MBA with concentration in Marketing & Finance), Indian Institute of Management, Ahmedabad, India, 1987-1989", "Bachelor of Technology , Chemical Engg, Indian Institute of Technology, Kanpur, India, 1982-1986"],
        about: "Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ipsa earum aspernatur numquam ex alias hic magni exercitationem, unde sit enim facere distinctio eius aperiam molestiae autem eos a ab qui voluptatem!"
    },
    {
        id:1,
        name: "Arjun",
        rollno: "20BCS085",
        skills: ["HTML", "ReactJS", "NextJS"],
        email:'20bcs085@nith.ac.in',
        phone: "+91-79-7152 4947",
        website: "www.google.com",
        address: "Vill- Gulabpura, PO- Panjehra, Teh- Nalagarh, Distt- Solan (HP) - 174101",
        education: ["Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996", "PGDM, (MBA with concentration in Marketing & Finance), Indian Institute of Management, Ahmedabad, India, 1987-1989", "Bachelor of Technology , Chemical Engg, Indian Institute of Technology, Kanpur, India, 1982-1986"],
        about: "Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ipsa earum aspernatur numquam ex alias hic magni exercitationem, unde sit enim facere distinctio eius aperiam molestiae autem eos a ab qui voluptatem!"
    },
    {
        id:1,
        name: "Ashutosh",
        rollno: "20BCS069",
        skills: ["HTML", "ReactJS", "NextJS"],
        email:'20bcs069@nith.ac.in',
        phone: "+91-79-7152 4947",
        website: "www.google.com",
        address: "Vill- Gulabpura, PO- Panjehra, Teh- Nalagarh, Distt- Solan (HP) - 174101",
        education: ["Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996", "PGDM, (MBA with concentration in Marketing & Finance), Indian Institute of Management, Ahmedabad, India, 1987-1989", "Bachelor of Technology , Chemical Engg, Indian Institute of Technology, Kanpur, India, 1982-1986"],
        about: "Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ipsa earum aspernatur numquam ex alias hic magni exercitationem, unde sit enim facere distinctio eius aperiam molestiae autem eos a ab qui voluptatem!"
    },
    {
        id:1,
        name: "Lekhit",
        rollno: "20BCS064",
        skills: ["HTML", "ReactJS", "NextJS"],
        email:'20bcs064@nith.ac.in',
        phone: "+91-79-7152 4947",
        website: "www.google.com",
        address: "Vill- Gulabpura, PO- Panjehra, Teh- Nalagarh, Distt- Solan (HP) - 174101",
        education: ["Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996", "PGDM, (MBA with concentration in Marketing & Finance), Indian Institute of Management, Ahmedabad, India, 1987-1989", "Bachelor of Technology , Chemical Engg, Indian Institute of Technology, Kanpur, India, 1982-1986"],
        about: "Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ipsa earum aspernatur numquam ex alias hic magni exercitationem, unde sit enim facere distinctio eius aperiam molestiae autem eos a ab qui voluptatem!"
    },
    {
        id:10,
        name: "Arjun Talwar",
        rollno: "20bcs085",
        skills: ["Cricketer", "Long Jump", "Body Building"]
    }
]
// const deta=Deta('c0acnnytluh_9eqZMHHkWEk2f92Mquy8CA9FdWverDq7')
// const db=deta.Base('users')
// const rs=db.putMany(studentData);
// console.log(rs)
