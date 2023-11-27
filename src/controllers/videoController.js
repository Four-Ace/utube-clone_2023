export const search =(req,res) =>{
    return res.send(`video search`);
};

export const trending =(req,res) =>{
    res.render("home",{pageTitle:"Home"});
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