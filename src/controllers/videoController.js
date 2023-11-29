let videos =[
    { title:"1st Video",
    rating : 1,
    comments : 12,
    createdAt : "2 min ago",
    views : 1,
    id : 1,
    },
    { title:"2nd Video ",
    rating : 2,
    comments : 22,
    createdAt : "2 min ago",
    views : 21,
    id : 2,
    },
    { title:"3rd Video",
    rating : 3,
    comments : 32,
    createdAt : "2 min ago",
    views : 31,
    id : 3,
    }];


export const trending =(req,res) =>{
    return res.render("home",{pageTitle:"Home",videos});
};

export const watch =(req,res) =>{
    // const id = req.params.id; 을 ES6 방식으로 
    const { id } = req.params;
    const video = videos[id-1];
    return res.render("watch",{pageTitle:`Watch ${video.title}`,video});
};

export const getEdit =(req,res) =>{
    const { id } = req.params;
    const video = videos[id-1];
    res.render("edit",{pageTitle:`Editing : ${video.title}`,video});
};

export const postEdit = (req,res) => {
    const { id } = req.params;
    const { title } =req.body;
    videos[id-1].title = title;
    return res.redirect(`/videos/${id}`);
};

export const search =(req,res) =>{
    return res.send(`video search`);
};

export const upload =(req,res) =>{
    return res.send(`video upload`);
};

export const deleteVideo =(req,res) =>{
    return res.send(`video delete`);
};