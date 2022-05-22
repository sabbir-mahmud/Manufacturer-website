const generateToken = async (email) => {
    const url = `http://localhost:5000/api/login`
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            const token = data.accessToken;
            localStorage.setItem(email, token);
        });

};

export default generateToken;