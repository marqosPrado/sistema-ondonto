import Header from "../components/Header";

function Dashboard() {
    try {
        document.getElementById("modalLogin").classList.remove("show", "d-block");
        document.querySelectorAll(".modal-backdrop")
            .forEach(el => el.classList.remove("modal-backdrop"));
    } catch (e) {
        console.log(e)
    }

    return (
        <>
            <Header />

        </>
    )
}

export default Dashboard;