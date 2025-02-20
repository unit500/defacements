const currentLocation = location.href;
const menuItem = document.querySelectorAll(".aside-list ul a");
const menuLength = menuItem.length;

for(var i = 0; i < menuLength; i++) {
    if(menuItem[i].href === currentLocation) {
        // menuItem[i].classList.add("active")
        menuItem[i].className = "active";
    }
}



const imgField = document.querySelector("#imgField")
const attachemntField = document.querySelector("#attachemntField")
const attachemntFieldAll = document.querySelectorAll(".homepopup-attachemntField")
const attachemntFieldAllNp = document.querySelectorAll(".homepopup-attachemntFieldNp")

const imgSlider = document.querySelector(".slider-images")
const healthInitiative = document.querySelector(".health-initiatives")
const healthInitiativeNep = document.querySelector(".health-initiativesNep")

const addImg =  document.querySelector('#addImg')
const addImg2 =  document.querySelector('#addImg2')

var removeLinkEng = document.getElementById('removeLinkEng')
var removeLinkNep =  document.querySelector('#removeLinkNep')


if(addImg){
    addImg.addEventListener("click", (e) => {
        e.preventDefault()
        const newField = `
        <div id="imgField">
            <div class="mb-3" style="position: relative; display: flex; align-items: center;">
                <input type="file" class="form-control" id="" name="image_link" placeholder="Image Link">
                <a href="#" class="mx-2"><i class="fa-solid fa-trash"></i></a>
            </div>
        </div>
        `
        const newDiv = document.createElement("div")
        newDiv.innerHTML = newField

        imgField.appendChild(newDiv)

    })
}


const addAttachment =  document.querySelector('#addAttachment')
// const addAttachmentAll =  document.querySelector('.addAttachment')
const addAttachmentNp =  document.querySelector('#addAttachmentNp')
if(addAttachment){
    addAttachment.addEventListener("click", (e) => {
        e.preventDefault()
        const newField = `
        <div id="attachemntField">
            <div class="mb-3" style="position: relative; display: flex; align-items: center;">
                <input type="text" class="form-control mx-2" id="" name="att_title" placeholder="Attachment Title">
                <input type="file" class="form-control" id="" name="att_link" placeholder="Attachment Link">
                <a href="#" class="mx-2"><i class="fa-solid fa-trash"></i></a>
            </div>
        </div>
        `

        const newDiv = document.createElement("div")
        newDiv.innerHTML = newField

        attachemntField.appendChild(newDiv)

        // <input type="text" class="form-control" id="" name="att_link" value="<%= about_content_np.attachments[i] %>" placeholder="Attachment Link">
    })
}

const addAttachment1 =  document.querySelectorAll('.homepopup-attachemntField1')
const addAttachment2 =  document.querySelectorAll('.homepopup-attachemntField2')
const addAttachment3 =  document.querySelectorAll('.homepopup-attachemntField3')
const addAttachment4 =  document.querySelectorAll('.homepopup-attachemntField4')
const addAttachment5 =  document.querySelectorAll('.homepopup-attachemntField5')

const addNp1 =  document.querySelectorAll('.homepopup-attachemntFieldNp1')
const addNp2 =  document.querySelectorAll('.homepopup-attachemntFieldNp2')
const addNp3 =  document.querySelectorAll('.homepopup-attachemntFieldNp3')
const addNp4 =  document.querySelectorAll('.homepopup-attachemntFieldNp4')
const addNp5 =  document.querySelectorAll('.homepopup-attachemntFieldNp5')

const addAttachmentBtn = (index, language) => {
        console.log(index)
        console.log(language)
        


        const newFieldNp = `
        <div id="attachemntField">
            <div class="mb-3" style="position: relative; display: flex; align-items: center;">
                <input type="text" class="form-control mx-2" id="" name="att_titleNp${index}" placeholder="Attachment Title">
                <input type="file" class="form-control" id="" name="att_linkNp${index}" placeholder="Attachment Link">
                <a href="#" class="mx-2"><i class="fa-solid fa-trash"></i></a>
            </div>
        </div>
        `
        const newField = `
        <div id="attachemntField">
            <div class="mb-3" style="position: relative; display: flex; align-items: center;">
                <input type="text" class="form-control mx-2" id="" name="att_title${index}" placeholder="Attachment Title">
                <input type="file" class="form-control" id="" name="att_link${index}" placeholder="Attachment Link">
                <a href="#" class="mx-2"><i class="fa-solid fa-trash"></i></a>
            </div>
        </div>
        `

        const newDiv = document.createElement("div")

        

        if(index == 0 && language == 'NP') { 
            newDiv.innerHTML = newFieldNp
            addNp1[0].appendChild(newDiv)
        } else if(index == 1 && language == 'NP') {
            newDiv.innerHTML = newFieldNp
            addNp2[0].appendChild(newDiv)
        } else if(index == 2 && language == 'NP') {
            newDiv.innerHTML = newFieldNp
            addNp3[0].appendChild(newDiv)
        } else if(index == 3 && language == 'NP') {
            newDiv.innerHTML = newFieldNp
            addNp4[0].appendChild(newDiv)
        } else if(index == 4 && language == 'NP') {
            newDiv.innerHTML = newFieldNp
            addNp5[0].appendChild(newDiv)
        } else if(index == 0 && language == 'EN') { 
            newDiv.innerHTML = newField
            addAttachment1[0].appendChild(newDiv)
        } else if(index == 1 && language == 'EN') {
            newDiv.innerHTML = newField
            addAttachment2[0].appendChild(newDiv)
        } else if(index == 2 && language == 'EN') {
            newDiv.innerHTML = newField
            addAttachment3[0].appendChild(newDiv)
        } else if(index == 3 && language == 'EN') {
            newDiv.innerHTML = newField
            addAttachment4[0].appendChild(newDiv)
        } else if(index == 4 && language == 'EN') {
            newDiv.innerHTML = newField
            addAttachment5[0].appendChild(newDiv)
        } else {
            return
        }
}

if(addAttachmentNp){
    addAttachmentNp.addEventListener("click", (e) => {
        e.preventDefault()
        const newField = `
        <div id="attachemntField">
            <div class="mb-3" style="position: relative; display: flex; align-items: center;">
                <input type="text" class="form-control mx-2" id="" name="att_titleNp" placeholder="Attachment Title">
                <input type="file" class="form-control" id="" name="att_linkNp" placeholder="Attachment Link">
                <a href="#" class="mx-2"><i class="fa-solid fa-trash"></i></a>
            </div>
        </div>
        `

        const newDiv = document.createElement("div")
        newDiv.innerHTML = newField

        attachemntField.appendChild(newDiv)

        // <input type="text" class="form-control" id="" name="att_link" value="<%= about_content_np.attachments[i] %>" placeholder="Attachment Link">
    })
}


// Image slider on hompage 

const addImageSlider =  document.querySelector('#addImageSlider')
const removeImageSlider =  document.querySelector('#removeImageSlider')
if(addImageSlider){

    addImageSlider.addEventListener("click", (e) => {
        e.preventDefault()
        const newField = document.createElement("div")
        newField.classList.add("image-slider")
        newField.classList.add("removeImg")
        const div = `
                <div class="mb-2 row">
                    <label for="inputPassword" class="col-sm-1">Image Path:</label>
                    <div class="col-sm-10" style="position: relative; display: flex; align-items: center;">
                        <input type="text" class="form-control" id="sliderpath" name="sliderpath" required >
                        <span data-bs-toggle="modal" data-bs-target="#imgLink" style="cursor: pointer; position: absolute; right: 63px; top: 50%; transform: translateY(-50%);">
                            <i class="fa-solid fa-folder-open"></i>
                        </span>
                        <!-- Modal -->
                        <div class="modal fade" id="imgLink" tabindex="-1" aria-labelledby="imgLinkLabel" aria-hidden="true">
                            <div class="modal-dialog modal-xl modal-dialog-scrollable">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="imgLinkLabel">Files Manager</h5>
                                        <span class="btn-close" data-bs-dismiss="modal" aria-label="Close"></span>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <a href="#" class="col-sm-1 removeEng" style="text-align: center;" id=""><i class="fa-solid fa-trash"></i></a>
                    </div>
                </div>
               
            `
            newField.innerHTML = div
    
        imgSlider.appendChild(newField)
    })
}



// add link on hompage 
const linkFieldEn = document.querySelector("#linkFieldEn")
const addLinkEn =  document.querySelector('#addLinkEn')
if(addLinkEn){
    addLinkEn.addEventListener("click", (e) => {
        e.preventDefault()
        const newField = document.createElement("div")
        newField.classList.add("link")
        newField.classList.add("mb-3")
        newField.classList.add("row")
        var div = `
            <div class="col">
                <input type="text" class="form-control" id="" name="impTitleEn" placeholder="Name" >
            </div>
            <div class="col">
                <input type="text" class="form-control" id="" name="impLinkEn" placeholder="Link" >
            </div>
            <a  class="col-sm-1" onclick="remove(this)" id=""><i class="fa-solid fa-trash"></i></a>
        `
        newField.innerHTML = div
    
        linkFieldEn.appendChild(newField)

    })
}



// nepali
const linkFieldNe = document.querySelector("#linkFieldNe")
const addLinkNe =  document.querySelector('#addLinkNe')
if(addLinkNe){
    addLinkNe.addEventListener("click", (e) => {
        e.preventDefault()
        // alert('wee')
        const newField = document.createElement("div")
        newField.classList.add("link")
        newField.classList.add("mb-3")
        newField.classList.add("row")
        var div = `
            <div class="col">
                <input type="text" class="form-control" id="" name="impTitleNp" placeholder="Name" >
            </div>
            <div class="col">
                <input type="text" class="form-control" id="" name="impLinkNp" placeholder="Link" >
            </div>
            <a  class="col-sm-1" onclick="remove(this)" id=""><i class="fa-solid fa-trash"></i></a>
        `
        newField.innerHTML = div
    
        linkFieldNe.appendChild(newField)
    })
}


//  important links on hompage 
const addImpLinkFieldEn = document.querySelector("#addImpLinkFieldEn")
const impLinkFieldEn =  document.querySelector('#impLinkFieldEn')
if(addImpLinkFieldEn){
  addImpLinkFieldEn.addEventListener("click", (e) => {
        e.preventDefault()
        const newField = document.createElement("div")
        newField.classList.add("link")
        newField.classList.add("mb-3")
        newField.classList.add("row")
       
        const div = `
        <div class="col">
            <input type="text " class="form-control" id="" name="navTitleNp" placeholder="Name" value="">
        </div>
        <div class="col">
            <input type="text" class="form-control" id="" name="navlinkNp" placeholder="Link" value="">
        </div>
        <a  class="col-sm-1 " onclick="remove(this)" id=""><i class="fa-solid fa-trash"></i></a>

      `

      newField.innerHTML = div
    
      impLinkFieldEn.appendChild(newField)
    })
}
// console.log(removeLinkEng)


// nepali important links
const impLinkFieldNe = document.querySelector("#impLinkFieldNe")
const addImpLinkFieldNe =  document.querySelector('#addImpLinkFieldNe')
if(addImpLinkFieldNe){
  addImpLinkFieldNe.addEventListener("click", (e) => {
        e.preventDefault()
        const newField = document.createElement("div")
        newField.classList.add("mb-3")
        newField.classList.add("row")
        newField.classList.add("link")
        
        const div = `
        <div class="col">
            <input type="text " class="form-control" id="" name="navTitleNp" placeholder="Name" value="">
        </div>
        <div class="col">
            <input type="text" class="form-control" id="" name="navlinkNp" placeholder="Link" value="">
        </div>
        <a  class="col-sm-1 " onclick="remove(this)" id=""><i class="fa-solid fa-trash"></i></a>

      `

      newField.innerHTML = div
       
    
      impLinkFieldNe.appendChild(newField)
    })
}



// nav link on hompage 
const navlinkField = document.querySelector("#navlinkField")
// const removeNavEng = document.querySelector("#removeNavEng")

const addNavLink =  document.querySelector('#addNavLink')
if(addNavLink){
    addNavLink.addEventListener("click", (e) => {
        e.preventDefault()
        const newField = document.createElement("div")
        newField.classList.add("mb-3")
        newField.classList.add("row")
       
        const div = `
            <div class="col">
                <input type="text " class="form-control" id="" name="navTitleEn" placeholder="Name" value="">
            </div>
            <div class="col">
                <input type="text " class="form-control" id="" name="" placeholder="Image Link" value="">
            </div>
            <div class="col">
                <input type="text" class="form-control" id="" name="navlinkEn" placeholder="Link" value="">
            </div>
            <a  class="col-sm-1 " onclick="remove(this)" id=""><i class="fa-solid fa-trash"></i></a>

        `
        
        newField.innerHTML = div

        navlinkField.appendChild(newField)
        
    })
}


// nepali
const quicklinkFieldNep = document.querySelector("#quicklinkFieldNep")

const addNavLinkNep =  document.querySelector('#addNavLinkNep')
if(addNavLinkNep){
    addNavLinkNep.addEventListener("click", (e) => {
        e.preventDefault()

        const newField = document.createElement("div")
        newField.classList.add("mb-3")
        newField.classList.add("row")
       
        const div = `
          <div class="col">
              <input type="text " class="form-control" id="" name="navTitleNp" placeholder="Name" value="">
          </div>
          <div class="col">
              <input type="text" class="form-control" id="" name="navlinkNp" placeholder="Link" value="">
          </div>
          <a  class="col-sm-1 " onclick="remove(this)" id=""><i class="fa-solid fa-trash"></i></a>

        `
        
        newField.innerHTML = div

        navlinkFieldNep.appendChild(newField)
        
    })
}

// Quick links on hompage 
const QuicklinkField = document.querySelector("#quicklinkField")
// const removeQuickEng = document.querySelector("#removeQuickEng")

const addQuickLink =  document.querySelector('#addQuickLink')
if(addQuickLink){
    addQuickLink.addEventListener("click", (e) => {
        e.preventDefault()
        const newField = document.createElement("div")
        newField.classList.add("mb-3")
        newField.classList.add("row")
       
        const div = `
          <div class="col">
              <input type="text " class="form-control" id="" name="quickTitleEn" placeholder="Name" value="">
          </div>
          <div class="col">
              <input type="text" class="form-control" id="" name="quicklinkEn" placeholder="Link" value="">
          </div>
          <a  class="col-sm-1 " onclick="remove(this)" id=""><i class="fa-solid fa-trash"></i></a>

        `
        
        newField.innerHTML = div

        QuicklinkField.appendChild(newField)
        
    })
}


// ADD QUICK LINKS NEPALI
const QuicklinkFieldNep = document.querySelector("#quicklinkFieldNep")

const addQuickLinkNep =  document.querySelector('#addQuickLinkNep')
if(addQuickLinkNep){
    addQuickLinkNep.addEventListener("click", (e) => {
        e.preventDefault()

        const newField = document.createElement("div")
        newField.classList.add("mb-3")
        newField.classList.add("row")
       
        const div = `
          <div class="col">
              <input type="text " class="form-control" id="" name="quickTitleNp" placeholder="Name" value="">
          </div>
          <div class="col">
              <input type="text" class="form-control" id="" name="quicklinkNp" placeholder="Link" value="">
          </div>
          <a  class="col-sm-1 " onclick="remove(this)" id=""><i class="fa-solid fa-trash"></i></a>
        `
        
        newField.innerHTML = div

        QuicklinkFieldNep.appendChild(newField)
        
    })
}
// }


// health initiatives section on home page
const addHealthInitiatives =  document.querySelector('#addHealthInitiatives')
const removeHealthInitiatives =  document.querySelector('#removeHealthInitiatives')
if(addHealthInitiatives){
addHealthInitiatives.addEventListener("click", (e) => {
    e.preventDefault()
    const newField = document.createElement("div")
    newField.classList.add("image-slider")
    newField.classList.add("healthEng")
    const div = `
            <div class="mb-2 row">
                <label for="inputPassword" class="col-sm-2">Image Path:</label>
                <div class="col-sm-10" style="position: relative; display: flex; align-items: center;">
                    <input type="text" class="form-control" id="healthPathEn" name="healthPathEn" required>
                    <span data-bs-toggle="modal" data-bs-target="#healthImgLink1" style="cursor: pointer; position: absolute; right: 25px; top: 50%; transform: translateY(-50%);">
                        <i class="fa-solid fa-folder-open"></i>
                    </span>
                    <!-- Modal -->
                    <div class="modal fade" id="healthImgLink1" tabindex="-1" aria-labelledby="healthImgLink1Label" aria-hidden="true">
                        <div class="modal-dialog modal-xl modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="healthImgLink1Label">Files Manager</h5>
                                    <span class="btn-close" data-bs-dismiss="modal" aria-label="Close"></span>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mb-2 row">
                <label for="inputPassword" class="col-sm-2">Description:</label>
                <div class="col-sm-9">
                <textarea class="form-control" id="healthDescriptionEn" name="healthDescriptionEn" required></textarea>
                </div>
                <a  class="col-sm-1 " id="" onclick="removeHealth(this)"><i class="fa-solid fa-trash"></i></a>
            </div>
            <div class="mb-2 row">
                <label for="inputPassword" class="col-sm-2">Link:</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="" name="healthLinkEn" required>
                </div>
            </div>
        `
        newField.innerHTML = div

        healthInitiative.appendChild(newField)
})
}

// nepali
const addHealthInitiativesNep =  document.querySelector('#addHealthInitiativesNep')
if(addHealthInitiativesNep){
addHealthInitiativesNep.addEventListener("click", (e) => {
    e.preventDefault()
    const newField = document.createElement("div")
    newField.classList.add("image-slider")
    newField.classList.add("healthNep")
    const div = `
            <div class="mb-2 row">
                <label for="inputPassword" class="col-sm-2">Image Path:</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="healthPathNp" name="healthPathNp" required>
                </div>
            </div>
            <div class="mb-2 row">
                <label for="inputPassword" class="col-sm-2">Description:</label>
                <div class="col-sm-10">
                <textarea class="form-control" id="healthDescription" name="healthDescription" required></textarea>
                </div>
                <a  class="col-sm-1 " onclick="removeHealth(this) id=""><i class="fa-solid fa-trash"></i></a>
            </div>
            <div class="mb-2 row">
                    <label for="inputPassword" class="col-sm-2">Link:</label>
                    <div class="col-sm-10">
                    <input type="text" class="form-control" id="" name="healthLinkNp" required>
                    </div>
                </div>
        `
        newField.innerHTML = div

        healthInitiativeNep.appendChild(newField)
})

}


const homePopUp = document.querySelector("#popUp-field")
const homePopUpNep = document.querySelector("#popUp-fieldNep")
const addPopUp = document.querySelector("#addPopUp")
const addPopUpNep = document.querySelector("#addPopUpNep")

var eng = document.querySelectorAll('.popUp').length + 1
var j = document.querySelectorAll('.popUpNp').length + 1

if(addPopUp){
    addPopUp.addEventListener("click", (e) => {
        e.preventDefault()
        const newField = document.createElement("div")
        newField.classList.add("home-popUp")
        const div = `
            <div class="tab-pane fade show active" id="" role="tabpanel" aria-labelledby="">
                <h5>Content in English</h5>
                <textarea name="home_popUp${eng}" id="home_popUp${eng}" class="popUp"></textarea>
            </div>
            <div class="form-check form-switch mt-2 mb-3">
                <input class="form-check-input" type="checkbox" name="publishEn${eng}" value="true" role="switch" id="" >
                <label class="form-check-label" for="publishEn">Publish</label>
            </div>
            `
            newField.innerHTML = div
    
            homePopUp.appendChild(newField)
            CKEDITOR.replace( `home_popUp${eng}`);
            eng++
    })

}
// nepali
if(addPopUpNep){
    addPopUpNep.addEventListener("click", (e) => {
        e.preventDefault()
        const newField = document.createElement("div")
        newField.classList.add("home-popUp")
        const div = `
            <div class="tab-pane fade show active" id="" role="tabpanel" aria-labelledby="">
                <h5>Content in English</h5>
                <textarea name="home_popUpNp${j}" id="home_popUpNp${j}" class="popUpNp"></textarea>
            </div>
            <div class="form-check form-switch mt-2 mb-3">
                <input class="form-check-input" type="checkbox" name="publishEn${j}" value="true" role="switch" id="" >
                <label class="form-check-label" for="publishEn">Publish</label>
            </div>
            `
            newField.innerHTML = div
    
            homePopUpNep.appendChild(newField)
            CKEDITOR.replace( `home_popUpNp${j}`);
            j++
    })  

}
// text editor

// E SECTION
const addESection = document.querySelector("#addESection")
const eSectionContainer = document.querySelector(".e-section-container")
const eSectionContainerNep = document.querySelector(".e-section-containerNep")
const addNepESection = document.querySelector("#addNepESection")
if(addESection){
    addESection.addEventListener("click", (e) => {
        e.preventDefault()
        const newField = document.createElement("div")
        newField.classList.add("image-slider")
        const div = `
        <div class="mb-2 row">
            <label for="" class="col-sm-1">Title:</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="esectionTitleEn" name="esectionTitleEn">
            </div>
        </div>
        <div class="mb-2 row">
            <label for="" class="col-sm-1">Link:</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="esectionLinkEn" name="esectionLinkEn">
            </div>
            <a class="col-sm-1 removeESection" id=""><i class="fa-solid fa-trash"></i></a>
        </div>
        <div class="mb-2 row">
            <label for="" class="col-sm-1">Path:</label>
            <div class="col-sm-10" style="position: relative; display: flex; align-items: center;">
                <input type="text" class="form-control" id="esectionPathEn" name="esectionPathEn" ">
                <span data-bs-toggle="modal" data-bs-target="#eSecImgLink1" style="cursor: pointer; position: absolute; right: 25px; top: 50%; transform: translateY(-50%);">
                    <i class="fa-solid fa-folder-open"></i>
                </span>
                <!-- Modal -->
                <div class="modal fade" id="eSecImgLink1" tabindex="-1" aria-labelledby="eSecImgLink1Label" aria-hidden="true">
                    <div class="modal-dialog modal-xl modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="eSecImgLink1Label">Files Manager</h5>
                                <span class="btn-close" data-bs-dismiss="modal" aria-label="Close"></span>
                            </div>
                            <div class="modal-body">
                                <div class="media-dashboard">
                                    <div class="media-container ">
                                        <% for(i = 0; i < folderName.length; i++) { %>
                                            <button class="model-image" type="button" onclick="openModelBtn('<%= folderName[i].foldername %>')" id="<%= folderName[i].foldername %>">
                                                    <i class="fa-solid fa-folder"></i>
                                                    <div class="media-title">
                                                            <span>
                                                                <%= folderName[i].foldername %>
                                                            </span>
                                                    </div>
                                            </button>
                                        <% } %>
                                    </div>                                    
                                </div>         
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `
            newField.innerHTML = div
    
            eSectionContainer.append(newField)
    })
}
// nepali
if(addNepESection){
    addNepESection.addEventListener("click", (e) => {
        e.preventDefault()
        const newField = document.createElement("div")
        newField.classList.add("image-slider")
        const div = `
        <div class="mb-2 row">
            <label for="" class="col-sm-1">Title:</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="esectionTitleNp" name="esectionTitleNp">
            </div>
        </div>
        <div class="mb-2 row">
            <label for="" class="col-sm-1">Link:</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="esectionLinkNp" name="esectionLinkNp">
            </div>
            <a class="col-sm-1 removeESection" id=""><i class="fa-solid fa-trash"></i></a>
        </div>
        <div class="mb-2 row">
            <label for="" class="col-sm-1">Path:</label>
            <div class="col-sm-10" style="position: relative; display: flex; align-items: center;">
                <input type="text" class="form-control" id="esectionPathNp" name="esectionPathNp">
                <span data-bs-toggle="modal" data-bs-target="#NepeSecImgLink1" style="cursor: pointer; position: absolute; right: 25px; top: 50%; transform: translateY(-50%);">
                    <i class="fa-solid fa-folder-open"></i>
                </span>
                <!-- Modal -->
                <div class="modal fade" id="NepeSecImgLink1" tabindex="-1" aria-labelledby="NepeSecImgLink1Label" aria-hidden="true">
                    <div class="modal-dialog modal-xl modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="NepeSecImgLink1Label">Files Manager</h5>
                                <span class="btn-close" data-bs-dismiss="modal" aria-label="Close"></span>
                            </div>
                            <div class="modal-body">
                                <div class="media-dashboard">
                                    <div class="media-container ">
                                        <% for(i = 0; i < folderName.length; i++) { %>
                                            <button class="model-image" type="button" onclick="openModelBtn('<%= folderName[i].foldername %>')" id="<%= folderName[i].foldername %>">
                                                    <i class="fa-solid fa-folder"></i>
                                                    <div class="media-title">
                                                            <span>
                                                                <%= folderName[i].foldername %>
                                                            </span>
                                                    </div>
                                            </button>
                                        <% } %>
                                    </div>                                    
                                </div>         
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `
            newField.innerHTML = div
    
            eSectionContainerNep.append(newField)
    })
}

// const addImageLinkPopUp = document.querySelector(".media-dashboard")
const addImageLinkPopUpSlider = document.querySelector(".media-slider")
const addImageLinkPopUpMinisterSection = document.querySelectorAll(".media-minister-section")
const addImageLinkPopUpQuickInformationSection = document.querySelector(".media-quickimformation")
const addImageLinkPopUpEsection = document.querySelector(".media-e-section")
const addImageLinkPopUpHealthInitiative = document.querySelector(".media-health")

function openModelBtnHealthInitiative(foldername) {
    // console.log(foldername)

    return fetch('/dashboard/openModel', {
        method: 'POST',
        headers: {'Content-Type': "application/json"},
        body: JSON.stringify({foldername})
    }).then(res => res.json())
    .then(data => {
        // console.log(data.data[0])
        if(data.msg == 'Success!') {
            const newField = document.createElement("div")
            newField.classList.add("new-modal")
            let popUpData = ``

            for(i = 0; i < data.data.length; i++) {
                var date =  JSON.stringify(data.data[i].createdAt).split("T")[0].substring(1)
                test = test + `<tr>
                    <td>${i + 1}</td>
                    <td>${data.data[i].title_eng}</td>
                    <td>
                        <img src="/${data.data[i].path}" alt="">
                    </td>
                    <td>${date}</td>
                    <td>${data.data[i].category}</td>
                    <td>
                        <div class="input">
                            <input type="text" class="myInp" value="${data.data[i].path}" placeholder="link" disabled>
                            <i class="fa-solid fa-clone btnCopy" data-bs-toggle="tooltip" data-bs-placement="top" title="Copy"></i>
                        </div>
                    </td>
                </tr>  `
            } 

            const div = `
                    <a href="#" class="modal-close"><i class="fa-solid fa-xmark"></i></a>
                    <div class="newModal-body">
                        <table id="users" class="table media-table table-striped" style="width:100%">
                            <thead>
                                <tr>
                                    <th>SN</th>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Date</th>
                                    <th>Category</th>
                                    <th>Link</th>
                                </tr>
                            </thead> 
                            <tbody>
                             ${test}
                            </tbody>
                        </table>
                    </div>
                `
            newField.innerHTML = div
    
            addImageLinkPopUpHealthInitiative.appendChild(newField)
        }
    })
}

function openModelBtnSliderImg(foldername) {
    // console.log(foldername)

    return fetch('/dashboard/openModel', {
        method: 'POST',
        headers: {'Content-Type': "application/json"},
        body: JSON.stringify({foldername})
    }).then(res => res.json())
    .then(data => {
        // console.log(data.data[0])
        if(data.msg == 'Success!') {
            const newField = document.createElement("div")
            newField.classList.add("new-modal")
            let popUpData = ``

            for(i = 0; i < data.data.length; i++) {
                var date =  JSON.stringify(data.data[i].createdAt).split("T")[0].substring(1)
                popUpData = popUpData + `<tr>
                    <td>${i + 1}</td>
                    <td>${data.data[i].title_eng}</td>
                    <td>
                        <img src="/${data.data[i].path}" alt="">
                    </td>
                    <td>${date}</td>
                    <td>${data.data[i].category}</td>
                    <td>
                        <div class="input">
                            <input type="text" class="myInp" value="${data.data[i].path}" placeholder="link" disabled>
                            <i class="fa-solid fa-clone btnCopy" data-bs-toggle="tooltip" data-bs-placement="top" title="Copy"></i>
                        </div>
                    </td>
                </tr>  `
            } 

            const div = `
                    <a href="#" class="modal-close"><i class="fa-solid fa-xmark"></i></a>
                    <div class="newModal-body">
                        <table id="users" class="table media-table table-striped" style="width:100%">
                            <thead>
                                <tr>
                                    <th>SN</th>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Date</th>
                                    <th>Category</th>
                                    <th>Link</th>
                                </tr>
                            </thead> 
                            <tbody>
                             ${popUpData}
                            </tbody>
                        </table>
                    </div>
                `
            newField.innerHTML = div
    
            addImageLinkPopUpSlider.appendChild(newField)
        }
    })
}

function openModelBtnMinisterSection(foldername, index) {
    // console.log(foldername)
    // console.log(index)

    return fetch('/dashboard/openModel', {
        method: 'POST',
        headers: {'Content-Type': "application/json"},
        body: JSON.stringify({foldername})
    }).then(res => res.json())
    .then(data => {
        console.log(data)
        // console.log(data.data[0])
        if(data.msg == 'Success!') {
            const newField = document.createElement("div")
            newField.classList.add("new-modal")
            let popUpData = ``

            for(i = 0; i < data.data.length; i++) {
                var date =  JSON.stringify(data.data[i].createdAt).split("T")[0].substring(1)
                popUpData = popUpData + `<tr>
                    <td>${i + 1}</td>
                    <td>${data.data[i].title_eng}</td>
                    <td>
                        <img src="/${data.data[i].path}" alt="">
                    </td>
                    <td>${date}</td>
                    <td>${data.data[i].category}</td>
                    <td>
                        <div class="input">
                            <input type="text" class="myInp" value="${data.data[i].path}" placeholder="link" disabled>
                            <i class="fa-solid fa-clone btnCopy" data-bs-toggle="tooltip" data-bs-placement="top" title="Copy"></i>
                        </div>
                    </td>
                </tr>  `
            } 

            const div = `
                    <a href="#" class="modal-close"><i class="fa-solid fa-xmark"></i></a>
                    <div class="newModal-body">
                        <table id="users" class="table media-table table-striped" style="width:100%">
                            <thead>
                                <tr>
                                    <th>SN</th>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Date</th>
                                    <th>Category</th>
                                    <th>Link</th>
                                </tr>
                            </thead> 
                            <tbody>
                             ${popUpData}
                            </tbody>
                        </table>
                    </div>
                `
            newField.innerHTML = div
    
            if(addImageLinkPopUpMinisterSection[index-1]) {
                return addImageLinkPopUpMinisterSection[index-1].appendChild(newField)
            }
        }
    })
}

function openModelBtnQucickInformationSection(foldername) {
    // console.log(foldername)

    return fetch('/dashboard/openModel', {
        method: 'POST',
        headers: {'Content-Type': "application/json"},
        body: JSON.stringify({foldername})
    }).then(res => res.json())
    .then(data => {
        // console.log(data.data[0])
        if(data.msg == 'Success!') {
            const newField = document.createElement("div")
            newField.classList.add("new-modal")
            let popUpData = ``

            for(i = 0; i < data.data.length; i++) {
                var date =  JSON.stringify(data.data[i].createdAt).split("T")[0].substring(1)
                popUpData = popUpData + `<tr>
                    <td>${i + 1}</td>
                    <td>${data.data[i].title_eng}</td>
                    <td>
                        <img src="/${data.data[i].path}" alt="">
                    </td>
                    <td>${date}</td>
                    <td>${data.data[i].category}</td>
                    <td>
                        <div class="input">
                            <input type="text" class="myInp" value="${data.data[i].path}" placeholder="link" disabled>
                            <i class="fa-solid fa-clone btnCopy" data-bs-toggle="tooltip" data-bs-placement="top" title="Copy"></i>
                        </div>
                    </td>
                </tr>  `
            } 

            const div = `
                    <a href="#" class="modal-close"><i class="fa-solid fa-xmark"></i></a>
                    <div class="newModal-body">
                        <table id="users" class="table media-table table-striped" style="width:100%">
                            <thead>
                                <tr>
                                    <th>SN</th>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Date</th>
                                    <th>Category</th>
                                    <th>Link</th>
                                </tr>
                            </thead> 
                            <tbody>
                             ${popUpData}
                            </tbody>
                        </table>
                    </div>
                `
            newField.innerHTML = div
    
            addImageLinkPopUpQuickInformationSection.appendChild(newField)
        }
    })
}

function openModelBtnEsection(foldername) {
    // console.log(foldername)

    return fetch('/dashboard/openModel', {
        method: 'POST',
        headers: {'Content-Type': "application/json"},
        body: JSON.stringify({foldername})
    }).then(res => res.json())
    .then(data => {
        // console.log(data.data[0])
        if(data.msg == 'Success!') {
            const newField = document.createElement("div")
            newField.classList.add("new-modal")
            let popUpData = ``

            for(i = 0; i < data.data.length; i++) {
                var date =  JSON.stringify(data.data[i].createdAt).split("T")[0].substring(1)
                popUpData = popUpData + `<tr>
                    <td>${i + 1}</td>
                    <td>${data.data[i].title_eng}</td>
                    <td>
                        <img src="/${data.data[i].path}" alt="">
                    </td>
                    <td>${date}</td>
                    <td>${data.data[i].category}</td>
                    <td>
                        <div class="input">
                            <input type="text" class="myInp" value="${data.data[i].path}" placeholder="link" disabled>
                            <i class="fa-solid fa-clone btnCopy" data-bs-toggle="tooltip" data-bs-placement="top" title="Copy"></i>
                        </div>
                    </td>
                </tr>  `
            } 

            const div = `
                    <a href="#" class="modal-close"><i class="fa-solid fa-xmark"></i></a>
                    <div class="newModal-body">
                        <table id="users" class="table media-table table-striped" style="width:100%">
                            <thead>
                                <tr>
                                    <th>SN</th>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Date</th>
                                    <th>Category</th>
                                    <th>Link</th>
                                </tr>
                            </thead> 
                            <tbody>
                             ${popUpData}
                            </tbody>
                        </table>
                    </div>
                `
            newField.innerHTML = div
    
            addImageLinkPopUpEsection.appendChild(newField)
        }
    })
}

//openModal
const newModal = document.querySelector(".new-modal")
const newModalAttachment = document.querySelector(".attachment-model")
const modalClose = document.getElementsByClassName("modal-close")

const fileModel = document.getElementsByClassName('model-image')

const OPEN_MODEL_IMG_ID = []

for(i = 0; i < fileModel.length; i++) {
    OPEN_MODEL_IMG_ID.push("#" + fileModel[`${i}`].id)
}
// console.log(OPEN_MODEL_IMG_ID)


const openModelImg = []
for(i = 0; i < fileModel.length; i++) {
    openModelImg.push(document.querySelector(OPEN_MODEL_IMG_ID[i]))

}

for(i = 0; i < fileModel.length; i++) {
    openModelImg[i].addEventListener("click", (e) => {
        e.preventDefault()
        // newModal.style.display = "block"
        // newModal.classList.add("add")
    })
}
//attachment
const fileModelAttachment = document.getElementsByClassName('model-attachment')

const OPEN_MODEL_ATTACHMENT_ID = []

for(i = 0; i < fileModelAttachment.length; i++) {
    OPEN_MODEL_ATTACHMENT_ID.push("#" + fileModelAttachment[`${i}`].id)
}
const openModelAttachment = []
for(i = 0; i < fileModelAttachment.length; i++) {
    openModelAttachment.push(document.querySelector(OPEN_MODEL_ATTACHMENT_ID[i]))
}

for(i = 0; i < fileModelAttachment.length; i++) {
    openModelAttachment[i].addEventListener("click", (e) => {
        e.preventDefault()
        // newModalAttachment.style.display = "block"
        // newModal.classList.add("add")
    })
}

//close
// for(i = 0; i < modalClose.length; i++) {
// }
if(modalClose){
    console.log(modalClose.parentEl)
    
    modalClose.addEventListener("click", () => {
        console.log("clickedf")
    })

}















