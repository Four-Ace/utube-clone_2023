export const search =(req,res) =>{
    return res.send(`video search`);
};

export const trending =(req,res) =>{
    const videos =[{ title:"Video #1",
    rating : 5,
    comments : 2,
    createdAt : "2 min ago",
    views : 59,
    id : 1,
    },
    { title:"Video #2",
    rating : 5,
    comments : 2,
    createdAt : "2 min ago",
    views : 59,
    id : 1,
    },
    { title:"Video #3",
    rating : 5,
    comments : 2,
    createdAt : "2 min ago",
    views : 59,
    id : 1,
    }];
    res.render("home",{pageTitle:"Home",videos});
};

export const see =(req,res) =>{
    res.render("watch",{pageTitle:"Watch"});
};

export const edit =(req,res) =>{
    res.render("edit",{pageTitle:"Edit Video"});
};




export const upload =(req,res) =>{
    return res.send(`video upload`);
};

export const deleteVideo =(req,res) =>{
    return res.send(`video delete`);
};