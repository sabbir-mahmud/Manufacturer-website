const generateToken = async (email) => {
    const url = `https://young-garden-78103.herokuapp.com/api/login`
    fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            const token = data.accessToken;
            localStorage.setItem('accessToken', token);
        });

};

export default generateToken;