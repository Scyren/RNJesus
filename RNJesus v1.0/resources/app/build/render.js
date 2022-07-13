const ipcRenderer = require("electron").ipcRenderer;
const generateBot = () => {

    if (document.querySelector("#easy").checked && document.querySelector("#nether").checked) {
        ipcRenderer.send(
            "generateBot",
            document.querySelector("#Player1").value,
            document.querySelector("#Player2").value,
            document.querySelector("#Player3").value,
            document.querySelector("#Player4").value,
            document.querySelector("#Cooldown").value,
            document.querySelector("#serverAddress").value,
            document.querySelector("#serverPort").value,
            document.querySelector("#easy").value,
            document.querySelector("#nether").value
        );
    }

    else if (document.querySelector("#easy").checked && !document.querySelector("#nether").checked) {
        ipcRenderer.send(
            "generateBot",
            document.querySelector("#Player1").value,
            document.querySelector("#Player2").value,
            document.querySelector("#Player3").value,
            document.querySelector("#Player4").value,
            document.querySelector("#Cooldown").value,
            document.querySelector("#serverAddress").value,
            document.querySelector("#serverPort").value,
            document.querySelector("#easy").value,
        );
    }

    else if (!document.querySelector("#easy").checked && document.querySelector("#nether").checked) {
        ipcRenderer.send(
            "generateBot",
            document.querySelector("#Player1").value,
            document.querySelector("#Player2").value,
            document.querySelector("#Player3").value,
            document.querySelector("#Player4").value,
            document.querySelector("#Cooldown").value,
            document.querySelector("#serverAddress").value,
            document.querySelector("#serverPort").value,
            document.querySelector("#nether").value,
            document.querySelector("#nether").value,
        );
    }

    else {
        ipcRenderer.send(
            "generateBot",
            document.querySelector("#Player1").value,
            document.querySelector("#Player2").value,
            document.querySelector("#Player3").value,
            document.querySelector("#Player4").value,
            document.querySelector("#Cooldown").value,
            document.querySelector("#serverAddress").value,
            document.querySelector("#serverPort").value
        );
    }
};

const quitBot = () => {
    ipcRenderer.send(
        "quitBot",
        document.querySelector("#Player1").value
    );
}
