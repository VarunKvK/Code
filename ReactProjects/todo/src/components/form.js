import React from "react";


const form = () => {
    return (
        <form>
            <input type="text" class="todolistinput"></input>
            <button class ="addtodolist"><span class ="iconify" data-icon="carbon:add" style="color: rgb(255, 255, 255);"></span></button>

            <div class ="tolistitems">
            <ul class ="itemcontainer"></ul>
            </div>
        </form>
    );
};