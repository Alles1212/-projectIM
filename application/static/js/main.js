var step = document.getElementById("step"); // 步驟按鈕
var description = document.getElementById("description"); // 敘述框按鈕
var t = document.getElementById('t');
var divForDescripBoxBackDrop = document.getElementById('divForDescripBoxBackDrop'); // 敘述框
var descripBox = document.getElementById('descripBox'); // 敘述框
var clearBtn = document.getElementById('clearBtn'); // 清除按鈕(敘述框)
var editBtn = document.getElementById('editBtn'); // 編輯按鈕(敘述框)
var finishBtn = document.getElementById('finishBtn'); // 完成按鈕(敘述框)
var closeBTN = document.getElementById('closeBTN'); // 關閉按鈕(敘述框)
var inputTheme = document.getElementById('inputTheme'); // 主題輸入盒(敘述框)
var divForDesTheme = document.getElementById('divForDesTheme'); // 主題輸入完成div(敘述框)
var textarea = document.getElementById('textarea'); // 文字區塊(敘述框)
var divForFinish = document.getElementById('divForFinish'); // 建立div顯示輸入的文字(敘述框)
var inputResource = document.getElementById('inputResource'); // 資料來源(敘述框)
var divForinputResource = document.getElementById('divForinputResource'); // 資料來源(敘述框)
var remitBackDropDiv = document.getElementById('remitBackDropDiv'); // 存檔背景
var remitBtn = document.getElementById('remitBtn'); // 存檔按鈕
var stepBoxBackDropDiv = document.getElementById('stepBoxBackDropDiv'); // 步驟框背景區塊
var stepBox = document.getElementById('stepBox'); // 步驟方塊
var itemsDiv = document.getElementById('itemsDiv'); // 項目區塊(步驟框)
var contentForStep = document.getElementById('contentForStep'); // 內容區塊(步驟框)
var allMethodDiv = document.getElementById('allMethodDiv'); // 上傳方式區塊(整塊)
var methodDiv = document.getElementById('methodDiv'); // 上傳方式名稱區塊
var methodContent = document.getElementById('methodContent'); // 上傳方式內容區塊
var detailDesDivBackDrop = document.getElementById('detailDesDivBackDrop'); // 詳細說明框
var closeDetailDesBox = document.getElementById('closeDetailDesBox'); // 詳細說明刪除鈕
var detailBtnDiv = document.getElementById('detailBtnDiv'); // 使用說明、按鈕介紹按鈕
var detailContent = document.getElementById('detailContent'); // 詳細說明內容
var introBtn = document.getElementById('introBtn'); // 主題說明按鈕

var showDescriptDiv = document.getElementById('showDescriptDiv'); // 說明框
var showDES = document.getElementById('showDES'); // 說明框說明
var showRES = document.getElementById('showRES'); // 說明框資料來源
var gobackDiv = document.getElementById('gobackDiv'); // 按鈕步驟框返回紐
var gobackBtn = document.getElementById('gobackBtn'); // 按鈕步驟框返回紐


introBtn.addEventListener('mousemove',function(){
    showDescriptDiv.style.visibility = 'visible';
})

showDescriptDiv.addEventListener('mouseleave',function(){
    showDescriptDiv.style.visibility = 'hidden';
})

selfFileDesBtn.addEventListener('click',function(){ // 自製表單步驟框
    opendetailBox()
})

// 開啟詳細說明框
function opendetailBox(){
    detailDesDivBackDrop.style.visibility = 'visible'; // 顯示詳細說明框
    detailContent.replaceChildren();
    IntroduceForSelfFile();
    for(var i = 0; i < detailBtnDiv.getElementsByTagName('div').length; i++){
        if(detailBtnDiv.getElementsByTagName('div')[i].textContent == '操作說明'){
            detailBtnDiv.getElementsByTagName('div')[i].addEventListener('click',IntroduceForSelfFile)
        }else{
            detailBtnDiv.getElementsByTagName('div')[i].addEventListener('click',btnIntroduceForSelfFile)
        }
    }
}

closeDetailDesBox.addEventListener('click',function(){
    detailDesDivBackDrop.style.visibility = 'hidden'; // 隱藏詳細說明框
})

// 自製表單操作說明
function IntroduceForSelfFile(){
    detailContent.replaceChildren();

    var pdiv = document.createElement('div');
    pdiv.id = 'pdiv';

    var desP = document.createElement('p');
    desP.textContent = 
    '此功能供使用者自行製作表單資料，第一列請輸入欄位名稱，第一行下拉式清單，為當前所點選地圖之所有鄉鎮，可透過清單進行更改。欲切換不同縣市之鄉鎮，回到主畫面，進行地圖的切換，即可更改鄉鎮名稱。';

     pdiv.appendChild(desP)
     detailContent.appendChild(pdiv)
}

// 自製表單按鈕介紹
function btnIntroduceForSelfFile(){
    detailContent.replaceChildren();

    var addDiv = document.createElement('div'); // 建立增加說明區塊
    addDiv.id = 'addDiv';

    var addDivImg = document.createElement('div'); // 建立增加圖片區塊
    addDivImg.id = 'addDivImg';

    var addDivSpan = document.createElement('span'); // 建立增加文字區塊
    addDivSpan.id = 'addDivSpan';
    addDivSpan.textContent = '可以增加新的一列或新的一欄';

    var minusDiv = document.createElement('div'); // 建立刪除說明區塊
    minusDiv.id = 'minusDiv';

    var minusDivImg = document.createElement('div'); // 建立刪除圖片區塊
    minusDivImg.id = 'minusDivImg';

    var minusDivSpan = document.createElement('span'); // 建立刪除文字區塊
    minusDivSpan.id = 'minusDivSpan';
    minusDivSpan.textContent = '每行每列可再點擊同個按鈕進行刪減';

    var returnDiv = document.createElement('div'); // 建立返回說明區塊
    returnDiv.id = 'returnDiv';

    var returnDivImg = document.createElement('div'); // 建立返回圖片區塊
    returnDivImg.id = 'returnDivImg';

    var returnDivSpan = document.createElement('span'); // 建立返回文字區塊
    returnDivSpan.id = 'returnDivSpan';
    returnDivSpan.textContent = '隱藏刪除鈕，顯示增加鈕';

    var clearDiv = document.createElement('div'); // 建立清除說明區塊
    clearDiv.id = 'clearDiv';

    var clearDivImg = document.createElement('div'); // 建立清除圖片區塊
    clearDivImg.id = 'clearDivImg';

    var clearDivSpan = document.createElement('span'); // 建立清除文字區塊
    clearDivSpan.id = 'clearDivSpan';
    clearDivSpan.textContent = '清空所有欄位資料';

    var submitSelfFlieDiv = document.createElement('div'); // 建立傳送說明區塊
    submitSelfFlieDiv.id = 'submitSelfFlieDiv';

    var submitSelfFlieDivImg = document.createElement('div'); // 建立傳送圖片區塊
    submitSelfFlieDivImg.id = 'submitSelfFlieDivImg';

    var submitSelfFlieDivSpan = document.createElement('span'); // 建立傳送文字區塊
    submitSelfFlieDivSpan.id = 'submitSelfFlieDivSpan';
    submitSelfFlieDivSpan.textContent = '確認上傳，進行下一步';

    addDiv.appendChild(addDivImg);
    addDiv.appendChild(addDivSpan);
    minusDiv.appendChild(minusDivImg);
    minusDiv.appendChild(minusDivSpan);
    clearDiv.appendChild(clearDivImg);
    clearDiv.appendChild(clearDivSpan);
    returnDiv.appendChild(returnDivImg);
    returnDiv.appendChild(returnDivSpan);
    submitSelfFlieDiv.appendChild(submitSelfFlieDivImg);
    submitSelfFlieDiv.appendChild(submitSelfFlieDivSpan);
    detailContent.appendChild(addDiv);
    detailContent.appendChild(minusDiv);
    detailContent.appendChild(returnDiv);
    detailContent.appendChild(clearDiv);
    detailContent.appendChild(submitSelfFlieDiv);
}


step.addEventListener('click', showStep); // 點擊步驟框按鈕
description.addEventListener('click', showDescription); // 點擊敘述框


 // 顯示步驟框
function showStep(){
    stepBoxBackDropDiv.style.visibility = 'visible'; // 顯示步驟框
    itemsDiv.replaceChildren();
    initStepContent(); // 初始步驟畫面(地圖)
    
    var itemsName = ['1. 地圖選擇','2. 上傳方式','3. 選擇欄位','4. 按鈕操作']; // 項目名稱
    for(var i = 0; i < itemsName.length; i++){
        var itemsNameDiv = document.createElement('div'); // 建立項目名稱區塊
        itemsNameDiv.className = 'itemsNameDiv';
        itemsNameDiv.textContent = itemsName[i]; // 設定文字
        itemsNameDiv.id = i;
        itemsDiv.appendChild(itemsNameDiv);

        // if(i == 0){
        //     itemsNameDiv.style.backgroundColor = '#FFEEDD';
        // }

        itemsNameDiv.addEventListener('click', changeContent); // 更改步驟內容
    }

    var button = document.createElement('button'); // 建立關閉鈕
    button.id = 'closeStep';

    button.addEventListener('click', function(){  // 關閉步驟框
        stepBoxBackDropDiv.style.visibility = 'hidden'; // 隱藏步驟框背景
        suBoxForButtons.style.visibility = 'hidden'; // 隱藏按鈕懸浮框
        gobackDiv.style.visibility = 'hidden'; // 隱藏返回區塊
    })

    itemsDiv.appendChild(button);
    stepBox.appendChild(itemsDiv);
    stepBox.appendChild(contentForStep);
    
    stepBoxBackDropDiv.appendChild(stepBox)

    button.addEventListener('mousemove',createButtonSuspendBox); // 滑鼠進入按鈕

    button.addEventListener('mouseout',function(){  // 滑鼠離開按鈕
        suBoxForButtons.style.visibility = 'hidden';
    })
}

// 初始步驟畫面(地圖)
function initStepContent(){
    contentForStep.replaceChildren();
    contentForStep.style.flexDirection = ''; // 刪除css樣式
    var mapImage = document.createElement('img'); // 建立地圖圖片
    mapImage.style.width = 300 + 'px';
    mapImage.style.height = 400 + 'px';
    mapImage.src = "../static/image/stepMap.png";

    var mapText = document.createElement('div'); // 建立地圖文字區塊
    mapText.style.width = 300 + 'px';
    mapText.style.height = 400 + 'px';
    mapText.style.display = 'flex';
    mapText.style.alignItems = 'center';
    mapText.style.textAlign = 'justify'; // 左右對齊
    mapText.style.position = 'relative';
    mapText.style.left = -10 + 'px';

    var p = document.createElement('div'); // 建立地圖文字
    p.innerHTML = '單擊不同縣市區塊可以切換不同縣市地圖，雙擊同一鄉鎮區塊可以切換回台灣地圖';
    p.style.position = 'relative';
    p.style.fontSize = 20 + 'px';

    mapText.appendChild(p);
    contentForStep.appendChild(mapImage);
    contentForStep.appendChild(mapText);
}

// 更改步驟內容(主畫面)
function changeContent(e){
    contentForStep.replaceChildren();
    var curDiv = e.target; // 當前點擊的項目
    
    if(curDiv.id == 0){
        initStepContent(); // 初始步驟畫面(地圖);
    }
    if(curDiv.id == 1){
        allFileStep(); // 檔案上傳步驟
    }
    if(curDiv.id == 2){
        chartsStep(); // 選擇圖表步驟
    }
    if(curDiv.id == 3){
        btnStep(); // 按鈕操作步驟
    }
}

// 檔案上傳步驟
function allFileStep(){
    methodDiv.replaceChildren();
    var numArr = ['檔案','API','自製表單']; // 三種上傳方式名稱

    for(var i = 0; i < numArr.length; i++){
        var methodNameDiv = document.createElement('div'); // 建立個別名稱區塊
        methodNameDiv.className = 'methodNameDiv';
        methodNameDiv.textContent = numArr[i]; // 設定文字
        methodNameDiv.id = i;
        methodDiv.appendChild(methodNameDiv);

        methodNameDiv.addEventListener('click', changeMethod); // 更改上傳方式內容
    }

    allMethodDiv.appendChild(methodDiv);
    allMethodDiv.appendChild(methodContent);
    contentForStep.appendChild(allMethodDiv);

    fileMethod(); // 預設檔案上傳方式步驟
}

// 更改上傳方式內容
function changeMethod(e){
    var curDiv = e.target; // 當前點擊的項目
    if(curDiv.id == 0){
        fileMethod(); // 檔案上傳步驟
    }else if(curDiv.id == 1){
        APIMethod(); // API上傳步驟
    }else if(curDiv.id == 2){
        selffFileMethod(); // 自製表單上傳步驟
    }
}

// 檔案上傳步驟
function fileMethod(){
    methodContent.replaceChildren();
    var fileDiv = document.createElement('div'); // 建立上傳檔案說明區塊
    fileDiv.id = 'fileDiv';

    var fileImg = document.createElement('div'); // 建立上傳檔案圖片區塊
    fileImg.id = 'fileImg';

    var fileSpan = document.createElement('span'); // 建立上傳檔案文字區塊
    fileSpan.id = 'fileSpan';
    fileSpan.textContent = '點擊此按鈕進行檔案上傳';

    var localDiv = document.createElement('div'); // 建立選擇檔案說明區塊
    localDiv.id = 'localDiv';

    var localImg = document.createElement('div'); // 建立選擇檔案圖片區塊
    localImg.id = 'localImg';

    var localSpan = document.createElement('span'); // 建立選擇檔案文字區塊
    localSpan.id = 'localSpan';
    localSpan.textContent = '選擇本機CSV檔案';

    var submitDivForFile = document.createElement('div'); // 建立確認上傳說明區塊
    submitDivForFile.id = 'submitDivForFile';

    var submitDivForFileImg = document.createElement('div'); // 建立傳送圖片區塊
    submitDivForFileImg.id = 'submitDivForFileImg';

    var submitDivForFileSpan = document.createElement('span'); // 建立傳送文字區塊
    submitDivForFileSpan.id = 'submitDivForFileSpan';
    submitDivForFileSpan.textContent = '確認上傳，進行下一步';

    fileDiv.appendChild(fileImg);
    fileDiv.appendChild(fileSpan);
    localDiv.appendChild(localImg);
    localDiv.appendChild(localSpan);
    submitDivForFile.appendChild(submitDivForFileImg);
    submitDivForFile.appendChild(submitDivForFileSpan);
    methodContent.appendChild(fileDiv);
    methodContent.appendChild(localDiv);
    methodContent.appendChild(submitDivForFile);
}

// API上傳步驟
function APIMethod(){
    methodContent.replaceChildren();

    var earthDiv = document.createElement('div'); // 建立上傳API說明區塊
    earthDiv.id = 'earthDiv';

    var earthDivImg = document.createElement('div'); // 建立上傳API圖片區塊
    earthDivImg.id = 'earthDivImg';

    var earthDivSpan = document.createElement('span'); // 建立上傳API文字區塊
    earthDivSpan.id = 'earthDivSpan';
    earthDivSpan.textContent = '點擊此按鈕進行API上傳';

    var apiInputDiv = document.createElement('div'); // 建立輸入API說明區塊
    apiInputDiv.id = 'apiInputDiv';

    var apiInputDivImg = document.createElement('div'); // 建立輸入API圖片區塊
    apiInputDivImg.id = 'apiInputDivImg';

    var apiInputDivSpan = document.createElement('span'); // 建立輸入API文字區塊
    apiInputDivSpan.id = 'apiInputDivSpan';
    apiInputDivSpan.textContent = '輸入從各縣市政府開放平台獲取的API'
    apiInputDivSpan.style.lineHeight = 40 + 'px';

    var submitDivForFile = document.createElement('div'); // 建立確認上傳說明區塊
    submitDivForFile.id = 'submitDivForFile';

    var submitDivForFileImg = document.createElement('div'); // 建立傳送圖片區塊
    submitDivForFileImg.id = 'submitDivForFileImg';

    var submitDivForFileSpan = document.createElement('span'); // 建立傳送文字區塊
    submitDivForFileSpan.id = 'submitDivForFileSpan';
    submitDivForFileSpan.textContent = '確認上傳，進行下一步';


    earthDiv.appendChild(earthDivImg);
    earthDiv.appendChild(earthDivSpan);
    apiInputDiv.appendChild(apiInputDivImg);
    apiInputDiv.appendChild(apiInputDivSpan);
    submitDivForFile.appendChild(submitDivForFileImg);
    submitDivForFile.appendChild(submitDivForFileSpan);
    methodContent.appendChild(earthDiv);
    methodContent.appendChild(apiInputDiv);
    methodContent.appendChild(submitDivForFile);
}
// 自製表單上傳步驟
function selffFileMethod(){
    methodContent.replaceChildren();

    var formDiv = document.createElement('div'); // 建立自製表單說明區塊
    formDiv.id = 'formDiv';

    var formDivImg = document.createElement('div'); // 建立自製表單圖片區塊
    formDivImg.id = 'formDivImg';

    var formDivSpan = document.createElement('div'); // 建立自製表單文字區塊
    formDivSpan.id = 'formDivSpan';
    formDivSpan.textContent = '點擊此按鈕開啟自製表單，如下圖，進行表單製作';

    var selfFileImgDiv = document.createElement('div'); // 建立自製表單圖片區塊
    selfFileImgDiv.id = 'selfFileImgDiv';

    formDiv.appendChild(formDivImg);
    formDiv.appendChild(formDivSpan);
    methodContent.appendChild(formDiv);
    methodContent.appendChild(selfFileImgDiv);
}

// 圖表上傳步驟
function chartsStep(){
    methodDiv.replaceChildren();
    firstColumnStep();
    var numArr = ['3.1 選擇欄位名稱','3.2 選擇鄉鎮','3.3 選擇圖表類型']; // 三種上傳方式名稱
    
    for(var i = 0; i < numArr.length; i++){
        var methodNameDiv = document.createElement('div'); // 建立個別名稱區塊
        methodNameDiv.className = 'chartsStepDiv';
        methodNameDiv.textContent = numArr[i]; // 設定文字
        methodNameDiv.id = i;
        methodDiv.appendChild(methodNameDiv);

        methodNameDiv.addEventListener('click', changeColumnContent); // 更改上傳方式內容
    }

    allMethodDiv.appendChild(methodDiv);
    allMethodDiv.appendChild(methodContent);
    contentForStep.appendChild(allMethodDiv);
}

// 更改選擇欄位步驟
function changeColumnContent(e){
    var curDiv = e.target; // 當前點擊的項目
    if(curDiv.id == 0){
        firstColumnStep(); // 選擇欄位步驟
    }else if(curDiv.id == 1){
        secondColumnStep(); // 選擇鄉鎮步驟
    }else if(curDiv.id == 2){
        thirdColumnStep(); // 選擇圖表步驟
    }
}

// 選擇欄位步驟
function firstColumnStep(){
    methodContent.replaceChildren();
    var outDiv = document.createElement('div'); // 最上層
    outDiv.className = 'outDiv';

    var chooseColumnStep = document.createElement('div'); // 圖片區塊
    chooseColumnStep.id = 'chooseColumnStep';

    var chooseColumnStepSpan = document.createElement('div'); // 文字區塊
    chooseColumnStepSpan.id = 'chooseColumnStepSpan';
    chooseColumnStepSpan.textContent = 
    "依據上傳的檔案，讀取第一行欄位資料，生成複選框，勾選所需之欄位名稱複選框，進行 3.2 之步驟。";


    outDiv.appendChild(chooseColumnStep);
    outDiv.appendChild(chooseColumnStepSpan);
    methodContent.appendChild(outDiv);
}
// 選擇鄉鎮步驟
function secondColumnStep(){
    methodContent.replaceChildren();
    var outDiv = document.createElement('div'); // 最上層
    outDiv.className = 'outDiv';

    var chooseTownStep = document.createElement('div'); // 圖片區塊
    chooseTownStep.id = 'chooseTownStep';

    var chooseTownStepSpan = document.createElement('div'); // 文字區塊
    chooseTownStepSpan.id = 'chooseColumnStepSpan';
    chooseTownStepSpan.textContent = 
    "依據上傳的檔案，讀取第一列鄉鎮資料，生成複選框，勾選所需之鄉鎮名稱複選框，進行 3.3 之步驟。";


    outDiv.appendChild(chooseTownStep);
    outDiv.appendChild(chooseTownStepSpan);
    methodContent.appendChild(outDiv);
}
// 選擇圖表步驟
function thirdColumnStep(){
    methodContent.replaceChildren();
    var outDiv = document.createElement('div'); // 最上層
    outDiv.className = 'outDiv';

    var chooseChartsStep = document.createElement('div'); // 圖片區塊
    chooseChartsStep.id = 'chooseChartsStep';

    var chooseChartsStepSpan = document.createElement('div'); // 文字區塊
    chooseChartsStepSpan.id = 'chooseColumnStepSpan';
    chooseChartsStepSpan.textContent = 
    "勾選圖表複選框（至多選四個），選擇圖表類型，根據上兩步驟之資料，呈現對應的圖表。";

    outDiv.appendChild(chooseChartsStep);
    outDiv.appendChild(chooseChartsStepSpan);
    methodContent.appendChild(outDiv);
}

// 按鈕操作步驟
function btnStep(){
    contentForStep.replaceChildren();
    gobackDiv.style.visibility = 'hidden'; // 隱藏返回區塊

    var span = document.createElement('span'); // 建立文字
    span.textContent = '點擊下列按鈕開啟功能說明：';
    span.style.fontSize = 22 + 'px';
    span.style.height = 70 + 'px';

    var btnNameArr = ['欄位鈕','說明鈕','顏色切換鈕',
                      '等級鈕','統計鈕','欄位切換鈕',
                      '預覽鈕','重製鈕','原始資料鈕']
    var btnNameArrPos = 0; // 記錄位置

    for(var i = 0; i < 3; i++){
        var btnStepDiv = document.createElement('div'); // 建立三個區塊
        for(var j = 0; j < 3; j++){
            var individualBtn = document.createElement('button'); // 建立按鈕
            individualBtn.id = 'individualBtn' + i + j;
            individualBtn.className = 'individualBtn';

            var btnspan = document.createElement('span'); // 建立對應的文字
            btnspan.textContent = btnNameArr[btnNameArrPos++]; // 陣列位置往後
            btnspan.style.position = 'relative';
            btnspan.style.left = -10 + 'px';

            individualBtn.addEventListener('click',changeBtnStep); // 切換按鈕步驟

            btnStepDiv.appendChild(individualBtn);
            btnStepDiv.appendChild(btnspan);

            // if(i == 3 & j == 0){
            //     btnspan.style.left = 50 + 'px';
            //     break;
            // }
        }
        btnStepDiv.style.display = 'flex';
        btnStepDiv.style.justifyContent = 'space-around';
        btnStepDiv.style.width = 650 + 'px';

        contentForStep.appendChild(btnStepDiv)
    }
    contentForStep.insertBefore(span,contentForStep.childNodes[0]);

    contentForStep.style.flexDirection = 'column';
    contentForStep.style.alignItems = 'center';
}

gobackBtn.addEventListener('click',btnStep); // 返回步驟框

// 清除並建立返回鈕
function clearBtnStep(){
    contentForStep.replaceChildren();
    gobackDiv.style.visibility = 'visible'; // 顯示返回區塊
       
}
function changeBtnStep(e){
    clearBtnStep(); // 清除原本畫面
    if(e.target.id == 'individualBtn00'){
        selectcolumnStep();
    }else if(e.target.id == 'individualBtn01'){
        introduceStep();
    }else if(e.target.id == 'individualBtn02'){
        colorStep();
    }else if(e.target.id == 'individualBtn10'){
        groupStep();
    }else if(e.target.id == 'individualBtn11'){
        statStep();
    }else if(e.target.id == 'individualBtn12'){
        rightleftStep();
    }else if(e.target.id == 'individualBtn20'){
        previewStep();
    }else if(e.target.id == 'individualBtn21'){
        returnStep();
    }else if(e.target.id == 'individualBtn22'){
        originalDataStep();
    }else if(e.target.id == 'individualBtn30'){
        sumavgStep();
    }
}

// 欄位鈕步驟
function selectcolumnStep(){
    var span = document.createElement('p');
    span.textContent = '滑鼠移至按鈕上方，開啟欄位選擇畫面，如下圖，進行 3. 欄位選擇步驟。';
    span.id = 'stepSpan';

    var div = document.createElement('div');
    div.id = 'allBtnStepDiv';
    for(var i = 0; i < 3; i++){
        var childDiv = document.createElement('div');
        childDiv.id = 'childDiv' + i;
        childDiv.className = 'childDiv';
        div.appendChild(childDiv);
    }

    contentForStep.appendChild(span);
    contentForStep.appendChild(div);
}

// 說明鈕步驟
function introduceStep(){
    var span = document.createElement('p');
    span.textContent = '滑鼠移至按鈕上方，開啟說明畫面，如下圖，提供使用者確認輸入的說明與資料來源。';
    span.id = 'stepSpan';

    var div = document.createElement('div');
    div.id = 'introduceStepImg';
    

    contentForStep.appendChild(span);
    contentForStep.appendChild(div);
}

// 顏色鈕步驟
function colorStep(){
    var span = document.createElement('p');
    span.textContent = '滑鼠移至按鈕上方，開啟顏色選擇框，如下圖，提供使用者能切換地圖的顏色。';
    span.id = 'stepSpan';

    var div = document.createElement('div');
    div.id = 'colorStepImg';

    contentForStep.appendChild(span);
    contentForStep.appendChild(div);
}

// 級距鈕步驟
function groupStep(){
    var span = document.createElement('p');
    span.textContent = '滑鼠移至按鈕上方，開啟級距選擇框，如下圖，提供使用者能選擇不同顏色等級，與輸入單位。';
    span.id = 'stepSpan';

    var div = document.createElement('div');
    div.id = 'groupStepImg';

    contentForStep.appendChild(span);
    contentForStep.appendChild(div);
}

// 統計鈕步驟
function statStep(){
    var span = document.createElement('p');
    span.textContent = '滑鼠移至按鈕上方，開啟摘要統計顯示框，如下圖，提供使用者查看相關統計資料。';
    span.id = 'stepSpan';

    var div = document.createElement('div');
    div.id = 'statStepImg';

    contentForStep.appendChild(span);
    contentForStep.appendChild(div);
}

// 方向鈕步驟
function rightleftStep(){
    var span = document.createElement('p');
    span.textContent = '分別點擊按鈕，可以切換不同欄位名稱，提供使用者查看在不同欄位名稱下，地圖顏色與鄉鎮資料之變化。';
    span.id = 'stepSpan';

    var div = document.createElement('div');
    div.id = 'dirImg';

    contentForStep.appendChild(span);
    contentForStep.appendChild(div);
}

// 預覽鈕步驟
function previewStep(){
    var span = document.createElement('p');
    span.textContent = '點擊按鈕，即可查看單一圖表，如下圖。';
    span.id = 'stepSpan';
    span.style.position = 'relative';
    span.style.left = 20 + '%';

    var div = document.createElement('div');
    div.id = 'previewStepImg';

    contentForStep.appendChild(span);
    contentForStep.appendChild(div);
}

// 返回鈕步驟
function returnStep(){
    var span = document.createElement('p');
    span.textContent = '點擊按鈕，清除選擇地圖以外之所有操作，提供使用者重新選擇檔案上傳方式，進行 2. 上傳方式之步驟。';
    span.id = 'stepSpan';

    contentForStep.appendChild(span);
}

// 加總平均鈕步驟
function sumavgStep(){
    var span = document.createElement('p');
    span.textContent = '此兩按鈕，點擊後會更換使用者所上傳之檔案資料，若檔案中有重複之鄉鎮名稱，點擊「加總鈕」，會將同一鄉鎮之資料相加；點擊「平均鈕」，則加以平均，並更新地圖。';
    span.id = 'stepSpan';

    var div = document.createElement('div');
    div.id = 'sumavgImg';

    contentForStep.appendChild(span);
    contentForStep.appendChild(div);
}

// 原始資料顯示鈕步驟
function originalDataStep(){
    var span = document.createElement('p');
    span.textContent = '點擊此按鈕，可以提供使用者查看所上傳的原始檔案資料，如下圖所示。';
    span.id = 'stepSpan';

    var div = document.createElement('div');
    div.id = 'originalDataImg';

    contentForStep.appendChild(span);
    contentForStep.appendChild(div);
}



var recordTheme = ""
var recordDescript = "";
var recordResource = "";
// 顯示敘述框
function showDescription(){
    //description.style.pointerEvents = 'none';  // 使敘述框按鈕失去功能
    divForDescripBoxBackDrop.style.visibility = 'visible'; // 顯示敘述框

    // editBtn.style.display = 'none'; // 隱藏編輯按鈕
    
    if(divForFinish.textContent != "" || divForFinish.textContent == "請輸入敘述"){ // 如果在完成後的畫面點擊關閉按鈕
        editBtn.style.display = 'block'; // 顯示編輯按鈕
    }
    
     // 清除按鈕
    clearBtn.addEventListener('click',function(){
        // 清空文字區塊
        // inputAuthor.value = "";
        inputTheme.value = "";
        textarea.value = "";
        inputResource.value = "";

    });

     // 完成按鈕
    finishBtn.addEventListener('click',function(){
        clearBtn.style.display = 'none'; // 隱藏清除按鈕
        finishBtn.style.display = 'none'; // 隱藏完成按鈕
        editBtn.style.display = 'block'; // 顯示完成按鈕


        // 清掉原本的文字
        divForFinish.replaceChildren();
        divForinputResource.replaceChildren();
        divForDesTheme.replaceChildren();

        if(inputTheme.value == ""){ // 如果沒輸入就完成
            divForDesTheme.style.display = 'block'; // 顯示敘述完成框
            inputTheme.style.display = 'none'; // 隱藏文字輸入框

            var span = document.createElement('span'); // 建立錯誤訊息
            span.textContent = '請輸入主題名稱';
            span.style.color = 'red';
            divForDesTheme.appendChild(span);
        }else{
            divForDesTheme.style.display = 'block'; // 顯示敘述完成框
            inputTheme.style.display = 'none'; // 隱藏文字輸入框

            var descripSpan = document.createElement('span'); // 將文字加到敘述完成框
            descripSpan.textContent = inputTheme.value;
            divForDesTheme.appendChild(descripSpan);
            townName.textContent = inputTheme.value; // 標題
            divForDesTheme.style.overflow = 'hidden' // 設定滾輪
            townName.style.overflow = 'hidden' // 設定滾輪
            recordTheme = descripSpan.textContent
        }

        if(textarea.value == ""){ // 如果沒輸入就完成
            divForFinish.style.display = 'block'; // 顯示敘述完成框
            textarea.style.display = 'none'; // 隱藏文字輸入框

            var span = document.createElement('span'); // 建立錯誤訊息
            span.textContent = '請輸入敘述';
            span.style.color = 'red';
            divForFinish.appendChild(span);
        }else{
            divForFinish.style.display = 'block'; // 顯示敘述完成框
            textarea.style.display = 'none'; // 隱藏文字輸入框

            var descripSpan = document.createElement('span'); // 將文字加到敘述完成框
            descripSpan.id = 'descripSpan';
            descripSpan.textContent = textarea.value;
            divForFinish.appendChild(descripSpan);
            divForFinish.style.overflowY = 'auto' // 設定滾輪

            showDES.getElementsByTagName('span')[0].textContent = textarea.value;

            recordDescript = descripSpan.textContent

        }

        if(inputResource.value == ""){ // 如果沒輸入就完成
            divForinputResource.style.display = 'block'; // 顯示資料來源完成框
            inputResource.style.display = 'none'; // 隱藏資料來源輸入框

            var span = document.createElement('span'); // 建立錯誤訊息
            span.textContent = '請輸入資料來源';
            span.style.color = 'red';
            divForinputResource.appendChild(span);
        }else{
            divForinputResource.style.display = 'block'; // 顯示資料來源完成框
            inputResource.style.display = 'none'; // 隱藏資料來源輸入框

            var descripSpan1 = document.createElement('span'); // 將文字加到資料來源完成框
            descripSpan1.id = 'descripSpan1';
            descripSpan1.textContent = inputResource.value;
            
            divForinputResource.appendChild(descripSpan1);
            divForinputResource.style.overflowX = 'auto' // 設定滾輪

            showRES.getElementsByTagName('span')[0].textContent = inputResource.value;

            recordResource = descripSpan1.textContent
        }
    });

    // 編輯按鈕
    editBtn.addEventListener('click',function(){
        editBtn.style.display = 'none'; // 隱藏編輯按鈕

        divForDesTheme.style.display = 'none'; // 隱藏主題名稱完成框
        inputTheme.style.display = 'block'; // 顯示主題輸入框

        divForFinish.style.display = 'none'; // 隱藏敘述完成框
        textarea.style.display = 'block'; // 顯示文字完成框

        divForinputResource.style.display = 'none'; // 隱藏資料來源完成框
        inputResource.style.display = 'block'; // 顯示資料來源輸入框

        clearBtn.style.display = 'block'; // 顯示清除按鈕
        finishBtn.style.display = 'block'; // 顯示完成按鈕
    });
    
    // 關閉按鈕
    closeBTN.addEventListener('click',function(){
        divForDescripBoxBackDrop.style.visibility = 'hidden'; // 隱藏敘述框
        description.style.pointerEvents = 'visible';  // 使敘述框按鈕恢復功能
        suBoxForButtons.style.visibility = 'hidden'; // 隱藏按鈕懸浮框
    });

}

remitBtn.addEventListener('click',remitScreen);
var booldes = false; // 判斷敘述框是否輸入正確
// 存檔
function remitScreen(){
    console.log(forBlankData)
    if(selectedRows.length > InputData.length-1){
        selectedRows.shift();
    }
    selectedRows = selectedRows
    if(selectedColumnIndices.length > InputData.length){
        selectedColumnIndices.shift();
    }
    selectedColumnIndices = selectedColumnIndices
    if(divForDesTheme.style.display == 'block'){
        console.log(1)
        if(divForDesTheme.textContent == '請輸入主題名稱' ||
           divForFinish.textContent == '請輸入敘述' ||
           divForinputResource.textContent == '請輸入資料來源'){
            booldes = true;
        }
    }

    // if(inputTheme.style.display == 'block'){
    //     console.log(1)
    //     if(inputTheme.value == "" ||
    //         textarea.value == "" ||
    //         inputResource.value == ""){
    //         booldes = true;
    //     }
    // }
    // console.log(divForDesTheme.style.display)
    // console.log(booldes)
    // if(booldes){
    //     showDescription();
    // }else{
        remitBackDropDiv.style.visibility = 'visible';
        setTimeout(function(){
            remitBackDropDiv.style.visibility = 'hidden';
        },1500);

        selectColumnBtn.style.visibility = 'hidden';
        colorBtn.style.visibility = 'hidden';
        forGroupBtn.style.visibility = 'hidden';
        statBtn.style.visibility = 'hidden';
        returnBtn.style.visibility = 'hidden';
        sumFileBtn.style.visibility = 'hidden';
        avgFileBtn.style.visibility = 'hidden';
        
        
        // changeBtnForRight.style.visibility = 'hidden';
        // changeBtnForLeft.style.visibility = 'hidden';
        for(var i = 0; i < allChartsContainer.getElementsByTagName('button').length; i++){
            allChartsContainer.getElementsByTagName('button')[i].style.visibility = 'hidden';
        }
        
        
        var JsonData = {
            "theme": recordTheme, // 目前作品名稱
            "descript": recordDescript, // 目前敘述
            "resource": recordResource, // 目前資料來源
            "svgMap": currentMap, // 目前縣市地圖
            "townName": recordTownName, // 目前縣市名稱
            "backGround": recordBackGround, // 目前選擇的背景(跟地圖一樣)
            "inputData": InputData, // 目前上傳的檔案(二維陣列)
            "rangeGroup": groupNum, // 目前選擇的顏色分組數
            "mapColor": currentColorID, // 目前選擇的顏色
            "fileName": recordFileName,
            "unitValue": recordUnit,
            "columnName": posForColumnDiv, // 目前選擇的欄位名稱(切換地圖)
            "selectColumn": selectedColumnIndices, // 目前被點擊的選擇欄位複選盒(陣列)
            "selectTown": selectedRows, // 目前被點擊的選擇鄉鎮複選盒(陣列)
            "chartCount": selectedChartCount,
            "checkWhichCharts":checkWhichCharts,
            "Data":forBlankData,
            
       }
       console.log(JsonData)
        selectColumnBtn.style.visibility = 'visible';
        colorBtn.style.visibility = 'visible';
        forGroupBtn.style.visibility = 'visible';
        statBtn.style.visibility = 'visible';
        returnBtn.style.visibility = 'visible';
        // sumFileBtn.style.visibility = 'visible';
        // avgFileBtn.style.visibility = 'visible';
        changeBtnForRight.style.visibility = 'visible';
        changeBtnForLeft.style.visibility = 'visible';
        statBtn.style.visibility = 'visible';
        for(var i = 0; i < allChartsContainer.getElementsByTagName('button').length; i++){
            allChartsContainer.getElementsByTagName('button')[i].style.visibility = 'visible';
        }

                                              //    <strong>// Create an event listener on the button element</strong>:
                // function(){

                //    <strong>// Get the reciever endpoint from Python using fetch</strong>:
                fetch("/add_todo", //127.0.0.1 public_ip port:8080
                {
                
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json'
                },
                //    <strong>// Strigify the payload into JSON</strong>:
                body:JSON.stringify(JsonData)}).then(res=>{
                    if(res.ok){
                        console.log("res.ok correct")
                        return res.json()
                    }else{
                        alert("something is wrong")
                    }
                }).then(jsonResponse=>{
                    
                    // Log the response data in the console
                    console.log(jsonResponse)
                } 
                ).catch((err) => console.error(err));

        console.log(JsonData);

        
    
}


var suBoxForButtons = document.getElementById('suBoxForButtons'); // 按鈕懸浮框
var allButton = document.body.getElementsByTagName("button"); // 所有按鈕

for(var i = 0; i < allButton.length;i++){
    allButton[i].addEventListener('mousemove',createButtonSuspendBox); // 滑鼠進入按鈕

    allButton[i].addEventListener('mouseout',function(){  // 滑鼠離開按鈕
        suBoxForButtons.style.visibility = 'hidden';
    });
}
function createButtonSuspendBox(d){
    suBoxForButtons.style.visibility = 'visible';
    suBoxForButtons.style.position = 'relative';
    suBoxForButtons.style.left = d.pageX + 15 + 'px';
    suBoxForButtons.style.top = d.pageY - 190 + 'px';

    if(d.target.id == 'sentFile'){ // 檔案區
        suBoxForButtons.textContent = '上傳檔案';
        suBoxForButtons.style.zIndex = 3;
    }else if(d.target.id == 'sentAPI'){
        suBoxForButtons.textContent = '上傳API';
        suBoxForButtons.style.zIndex = 3;
    }else if(d.target.id == 'sentSelfFile'){
        suBoxForButtons.textContent = '自製表單';
        suBoxForButtons.style.zIndex = 3;
    }else if(d.target.id == 'maxFileBtn'){
        suBoxForButtons.textContent = '最大值';
    }else if(d.target.id == 'minFileBtn'){
        suBoxForButtons.textContent = '最小值';
    }else if(d.target.id == 'returnBtn'){
        suBoxForButtons.textContent = '返回';
    }else if(d.target.id == 'downloadAll'){
        suBoxForButtons.textContent = '下載'; // 最上面區
    }else if(d.target.id == 'remitBtn'){
        suBoxForButtons.textContent = '存檔';
    }else if(d.target.id == 'step'){
        suBoxForButtons.textContent = '步驟';
    }else if(d.target.id == 'description'){
        suBoxForButtons.textContent = '基本資料';
    }else if(d.target.id == 'statBtn'){
        suBoxForButtons.textContent = '摘要統計';
    }else if(d.target.id == 'forGroupBtn'){
        suBoxForButtons.textContent = '級距';
    }else if(d.target.id == 'clearBtn'){
        suBoxForButtons.textContent = '清除'; // 敘述框區
        suBoxForButtons.style.zIndex = 4;
    }else if(d.target.id == 'editBtn'){
        suBoxForButtons.textContent = '編輯';
        suBoxForButtons.style.zIndex = 4;
    }else if(d.target.id == 'finishBtn'){
        suBoxForButtons.textContent = '完成';
        suBoxForButtons.style.zIndex = 4;
    }else if(d.target.id == 'closeBTN' || 
             d.target.id == 'statClose' ||
             d.target.id == 'closeStep'){
        suBoxForButtons.style.visibility = 'hidden';
    }else if(d.target.id == 'submitButtonForselfFile' ||
             d.target.id == 'submit' ||
             d.target.id == 'submitAPI'){
        suBoxForButtons.textContent = '上傳';
        suBoxForButtons.style.zIndex = 3;
    }else if(d.target.id == 'clearButtonForselfFile'){
        suBoxForButtons.textContent = '全部清除';
        suBoxForButtons.style.zIndex = 3;
    }
    else if(d.target.id == 'showOriginalBtn'){
        suBoxForButtons.textContent = '原始資料';
        suBoxForButtons.style.zIndex = 3;
    }else if(d.target.id == 'returnButtonForselfFile'){
        suBoxForButtons.textContent = '返回';
        suBoxForButtons.style.zIndex = 3;
    }else if(d.target.id == 'closeButtonForselfFile'){
        suBoxForButtons.textContent = '關閉表格';
        suBoxForButtons.style.zIndex = 3;
    }else if(d.target.id == 'addButton_Row'){
        suBoxForButtons.textContent = '新增列';
        suBoxForButtons.style.zIndex = 3;
    }else if(d.target.id == 'addButton_Col'){
        suBoxForButtons.textContent = '新增欄';
        suBoxForButtons.style.zIndex = 3;
    }else if(d.target.id == 'minusAllBtn'){
        suBoxForButtons.textContent = '刪除';
        suBoxForButtons.style.zIndex = 3;
    }else if(d.target.id == 'selfFileDesBtn'){
        suBoxForButtons.textContent = '說明';
        suBoxForButtons.style.zIndex = 2;
    }else if(d.target.id == 'divForCsvFile'){
        suBoxForButtons.textContent = '選擇CSV';
        suBoxForButtons.style.zIndex = 2;
    }else if(d.target.id == 'downloadXLSX'){
        suBoxForButtons.textContent = '下載XLSX';
        suBoxForButtons.style.zIndex = 3;
    }else if(d.target.id == 'downloadJPG'){
        suBoxForButtons.textContent = '下載JPG';
        suBoxForButtons.style.zIndex = 3;
    }

    if(d.target.id == 'colorBtn' || 
       d.target.id == 'changeBtnForLeft' ||
       d.target.id == 'changeBtnForRight' ||
       d.target.id == 'sumFileBtn' ||
       d.target.id ==  'avgFileBtn' ||
       d.target.id ==  'forGroupBtn' ||
       d.target.id ==  'statBtn' ||
       d.target.id ==  'introBtn' ||
       d.target.id ==  'closeDetailDesBox'){ // 顏色選擇鈕跟左右鈕不用出現懸浮框
        suBoxForButtons.style.visibility = 'hidden';
    }

    if(d.target.className == 'previewBtn' ||
       d.target.className == 'previewBtn_two' ||
       d.target.className == 'previewBtn_three' ||
       d.target.className == 'previewBtn_four' ||
       d.target.className == 'three_secBtn' ||
       d.target.className == 'three_thiBtn' ||
       d.target.className == 'four_firBtn' ||
       d.target.className == 'four_secBtn' ||
       d.target.className == 'four_fouBtn' ||
       d.target.className == 'previewBtn_three'){
        suBoxForButtons.textContent = '預覽';
        suBoxForButtons.style.zIndex = 2;
    }
}











