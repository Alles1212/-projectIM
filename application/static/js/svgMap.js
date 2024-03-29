window.onload = (function() {
    var svgDiv = document.getElementById("svgDiv"); // 放置svg的區塊

    svgDiv.addEventListener('click',showTownName)
    svgDiv.addEventListener('click',chooseMap); // 滑鼠點擊時觸發
    svgDiv.addEventListener('mousemove',suspendBox); // 滑鼠移動到開區域時觸發
    svgDiv.addEventListener('dblclick',backToTaiwan); // 滑鼠雙擊後觸發
    changeBackGround(0); // 預設背景顏色
    

    showDescription();
    showStep();
    var completedCalled = document.getElementById("completedCalled").textContent;
    console.log(completedCalled)
    if(completedCalled == 'True'){
        getBackEndData();
        remitBtn.style.backgroundImage = "url(../static/image/saveBtn.png)";
        remitBtn.style.pointerEvents = 'none';
        returnBtn.style.visibility = 'hidden';
        editBtn.style.display = 'none';


    }else{
        getBackEndData();
        stepBoxBackDropDiv.style.visibility = 'hidden'; // 顯示步驟框
        divForDescripBoxBackDrop.style.visibility = 'hidden'; // 顯示敘述框
        remitBtn.style.backgroundImage = "url(../static/image/remit.png)";
        remitBtn.style.pointerEvents = 'visible';
        returnBtn.style.visibility = 'visible';

    }
    //testFuction();
});
    function testFuction(){
        var str = '[{"地區":"臺中市","項目":"大坑風景區各登山步道遊客數(單位:人次)","欄位名稱":"1號步道","數值":1395,"資料時間日期":"2021-09-01T00:00:00","資料週期":"月","郵遞區號":"407610","機關代碼":"387000000A","電子郵件":"oddisp@t\
        aichung.gov.tw","行動電話":"0910289111","市話":"(04)22289111","縣市別代碼":"66000","行政區域代碼":"10019000"},{"地區":"臺中市","項目":"大坑風景區各登山步道遊客數(單位:人次)","欄位名稱":"10號步道","數值":"","資料時間日\
        期":"2021-09-01T00:00:00","資料週期":"月","郵遞區號":"407610","機關代碼":"387000000A","電子郵件":"oddisp@taichung.gov.tw","行動電話":"0910289111","市話":"(04)22289111","縣市別代碼":"66000","行政區域代碼":"10019000"}]'

        var jsonArray = JSON.parse(str);
        var twoDArray = [];
        for (var i = 0; i < jsonArray.length; i++) {
            var row = [];
            for (var key in jsonArray[i]) {
                row.push(jsonArray[i][key]);
            }
            twoDArray.push(row);
        }
        twoDArray.unshift(Object.keys(jsonArray[0]));


        console.log(twoDArray);

        InputData = twoDArray;
        document.getElementById('chooseMethod').style.visibility = 'hidden';
        divForDescripBoxBackDrop.style.visibility = 'hidden';
        stepBoxBackDropDiv.style.visibility = 'hidden';

        if(judgeBlankSpace(InputData)){
			skipBlank(InputData); // 刪掉空白較多的行
			showError(InputData); // 顯示空白區域
			return;
		}

		InputData = analyze(InputData); // 資料清洗(在 analyzeData.js)

        console.log(InputData)
		
		if(InputData.length == 0){ // 資料有空白(originArray)，不處理
			return;
		}else{ // 資料無空白，顯示圖表區
			buttonVisible(); // 顯示各式按鈕
			renderColumnSelect(); // 生成欄位下拉式清單
			renderRowSelect();
			renderColumnText(); // 生成欄位名稱區塊(地圖變換用)
			Grouping(); // 分組
		}
        
    }

    var colorBtn = document.getElementById('colorBtn'); // 選擇顏色按鈕
    var suBox = document.getElementById("suBox"); // 懸浮區塊
    var Outlying_islands = document.getElementById("Outlying_islands"); // 離島邊框
    var townName = document.getElementById('townName'); // 鄉鎮名稱
    var boolTaiwan = false; // 記錄回到台灣地圖
    var recordBackGround = 0; // 記錄目前背景
    
    recordTownName = "";
    function backToTaiwan(e){
        if(InputData.length != 0 || blankDiv.style.visibility == 'visible'){
            return false;
        }else{
            if(e.target.id != ''){ // 不是點擊非地圖的svg區塊
                Outlying_islands.style.visibility = 'visible'; // 顯示離島邊框
                BackGround.style.backgroundImage = "url(../static/image/Taiwan_background.jpg)" // 台灣背景
                columnNameDiv.style.visibility = 'hidden'; // 隱藏欄位名稱區塊
                fileNameDiv.style.visibility = 'hidden'; // 隱藏檔案名稱區塊
                sumFileBtn.style.visibility = 'hidden'; // 隱藏加總按鈕區塊
                avgFileBtn.style.visibility = 'hidden'; // 隱藏平均按鈕區塊
                forGroupBtn.style.visibility = 'hidden'; // 隱藏級距按鈕區塊
                
    
                svgDiv.replaceChildren(); // 點擊其他選項時刪除原本svg
                
                // townName.textContent = "臺灣地圖";
                // recordTownName = townName.textContent;
    
                currentMap = 0; // 還原
                recordBackGround = 0; // 記錄目前背景value
    
                boolTaiwan = true; // 判斷是否有回到台灣地圖
    
                townArea(0); // 回到台灣地圖
                changeBackGround(0)
                originColor(); // 重製顏色
    
            }
        }
        
    }

    // 懸浮框,顯示名稱與資料
    function suspendBox(d){
        suBox.replaceChildren(); // 當滑鼠移動時,刪除原本的文字(名稱)

        // 設定懸浮框位置
        suBox.style.top = d.pageY - 120 + 'px';
        suBox.style.left = d.pageX - 220 + 'px';
        suBox.style.visibility = 'visible'; // 顯示懸浮框
        
        var title = document.createElement('span'); // 建立名稱,顯示在懸浮框
        title.style.display = 'flex';
        title.style.justifyContent = 'center';
        title.style.position = 'relative';
        title.style.top = 10 + 'px';
        title.textContent = d.target.id; // 懸浮框標題之文字

        var currentData = document.createElement('span');
        var idName = d.target.id; // 刪掉最後一個字(鄉、鎮、市、區)
        currentData.style.display = 'flex';
        currentData.style.justifyContent = 'center';
        currentData.textContent = '無資料'; // 預設無資料
        
        for(var i = 0; i < townArray.length; i++){
            if(townArray[i] == (idName)){ // 找到對應的鄉鎮
                currentData.textContent = columnNameArray[0] + '：' + colArray[i]; // 顯示數值
                console.log(columnNameArray)
            }
        }
        if(title.textContent == "" || title.textContent == "svgDiv"){ // 滑鼠超出地圖範圍時,不顯示懸浮框
            suBox.style.visibility = 'hidden'; // 隱藏懸浮框
        }

        suBox.appendChild(title);
        suBox.appendChild(document.createElement('br')) // 換行
        suBox.appendChild(currentData);

        
    }
    // 選擇縣市名稱顯示鄉鎮地圖
    var currentMap = 0; // 當前地圖value
    
    function chooseMap(e){
        if(blankDiv.style.visibility == 'visible' || InputData.length != 0){
            return false;
        }else{
            if(InputData.length != 0){ // 檔案上傳後
                colorBtn.style.visibility = 'visible'; // 顯示選擇顏色按鈕
                columnNameDiv.style.visibility = 'visible'; // 顯示欄位名稱區塊
                fileNameDiv.style.visibility = 'visible'; // 顯示檔案名稱區塊
                // sumFileBtn.style.visibility = 'visible'; // 顯示加總按鈕區塊
                // avgFileBtn.style.visibility = 'visible'; // 顯示平均按鈕區塊
                forGroupBtn.style.visibility = 'visible'; // 顯示級距按鈕區塊
                
            }
    
            var currentID = e.target.id; // 當前的縣市
            for(var attr in CityName){
                if(currentID == CityName[attr]){
                    svgDiv.replaceChildren(); // 點擊其他縣市時刪除原本svg
                    townArea(attr);
                    changeBackGround(attr);
                    currentMap = attr; // 計錄當前的地圖位置(allMap用)
                    limitCityColor(); // 其他縣市不變色
                }
    
            }
            if(currentID != ""){ // 滑鼠非點擊非地圖之svg區塊
                Outlying_islands.style.visibility = 'hidden'; // 隱藏離島邊框
            }
        }
        
    }

    // 印出地圖
    function townArea(attr){
        svgDiv.replaceChildren(); // 點擊其他選項時刪除原本svg
        var svg_SVG = createSvg('svg',{'xmlns':svgNS,'width':'700px','height':'750px'}); // svg圖片(背景)
        var svg_G = createSvg('g',{'cursor':'pointer'}); // 容器
        rangeDiv.style.visibility = 'visible'; // 顯示顏色範圍框

        for(var i = 0; i < allMap[attr].length; i++){ // 讀座標
            var svg_Polygon = createSvg('polygon',allMap[attr][i]); // 多邊形
            svg_G.appendChild(svg_Polygon);

            if(InputData.length !== 0){ // 傳送檔案後才會生成顏色
                renderColor(attr,svg_Polygon,i); // 生成顏色(在 StatisAndColor.js) 
            }
        }
        
        for(var index in viewbox){
            if(attr == index){
                console.log(1)
                svg_SVG.setAttribute('viewBox',viewbox[index]); // 設定地圖大小 
            }
        }
        svg_SVG.appendChild(svg_G);
        svgDiv.appendChild(svg_SVG);

        if(attr != 0){
            Outlying_islands.style.visibility = 'hidden';
        }
    }
    
    // 建立svg
    var svgNS = "http://www.w3.org/2000/svg"; // xmlns(svg屬性)
    function createSvg(tag, objArray){
        var current_tag = document.createElementNS(svgNS, tag); // 創建新元素
        for(var arr in objArray){
            current_tag.setAttribute(arr, objArray[arr]); // 設定屬性
        }
        return current_tag;
    }

    // 顯示該區塊之鄉鎮名稱
    function showTownName(name){
        var currentId = name.target.id; // 當前鄉鎮名稱

        if(boolTaiwan == true){ // 回到台灣地圖
            currentMap = 0; // 還原
        }

        // if(currentMap == 0){ // 台灣地圖
        //     townName.textContent = currentId; // 顯示縣市名稱
        //     recordTownName = townName.textContent
        // }

        // if(currentMap in CityName & currentMap != 0){ // 縣市地圖
        //     townName.textContent = CityName[currentMap]; // 顯示資料
        //     recordTownName = townName.textContent
        // }

        boolTaiwan = false; // 還原
    }

    var BackGround = document.getElementById('BackGround');
    // 更換背景
    function changeBackGround(attr){
        BackGround.replaceChildren(); // 清除原本的元素
        BackGround.style.backgroundImage = backGroundUrl[attr]; // 根據點選的地圖切背景

        var default_BackGround = document.createElement('div');
        default_BackGround.id = 'default_BackGround'; // 建立透視框

        BackGround.appendChild(default_BackGround)
        
        recordBackGround = attr; // 記錄目前背景

    }
    
    var columnNameDiv = document.getElementById('columnNameDiv'); // 欄位名稱區塊
    var fileNameDiv = document.getElementById('fileNameDiv'); // 檔案名稱區塊
    var spanForColumnNameDiv = document.getElementById('spanForColumnNameDiv'); // 選擇鄉鎮區塊文字
    var posForColumnDiv = 1; // 記錄當前欄位名稱位置
    var columnNameArray = []; // 儲存當前欄位名稱(懸浮框用)
    // 生成欄位名稱區塊(地圖變換用)
	function renderColumnText(){
        statistics(); // 摘要統計
        Grouping(); // 進行顏色分組
        appearRange(); // 顯示範圍框

        spanForColumnNameDiv.textContent = InputData[0][1]; // 初始值

        if(spanForColumnNameDiv.textContent == InputData[0][0]){ // 當等於位置為0的欄位
            var svgPolygon = svgDiv.getElementsByTagName('polygon'); // 抓取每個polygon資料
            for(var i = 0; i < svgPolygon.length; i++){
                svgPolygon[i].style.fill = currentColorDiv[8]; // 重製顏色
            }
        }

        columnNameArray.unshift(InputData[0][1]); // 初始值加到陣列儲存

        changeBtnForRight.addEventListener('click',showRight); // 點擊更換地圖按鈕(往右)
        changeBtnForLeft.addEventListener('click',showLeft); // 點擊更換地圖按鈕(往左)
            
    }

    // 點擊更換地圖按鈕(往右)
    function showRight(){

        posForColumnDiv += 1; // 下一個文字

        if(posForColumnDiv > InputData[0].length-1){ // 該位置超過欄位數量
            posForColumnDiv = 1; // 恢復第一個位置
            spanForColumnNameDiv.textContent = InputData[0][posForColumnDiv]; // 文字顯示第一個欄位
        }
        
        spanForColumnNameDiv.textContent = InputData[0][posForColumnDiv]; // 根據按鈕變換文字
        columnNameArray.unshift(spanForColumnNameDiv.textContent); // 加入陣列儲存
        
        statistics(); // 摘要統計
        Grouping(); // 進行顏色分組
        appearRange(); // 顯示範圍框
        
    }

    // 點擊更換地圖按鈕(往左)
    function showLeft(){

        posForColumnDiv -= 1; // 上一個文字
        
        if(posForColumnDiv < 1){ // 位置小於欄位數量
            posForColumnDiv = InputData[0].length-1; // 更改為陣列中最後一個欄位名稱
            spanForColumnNameDiv.textContent = InputData[0][posForColumnDiv]; // 文字顯示最後一個欄位
        }

        spanForColumnNameDiv.textContent = InputData[0][posForColumnDiv]; // 根據按鈕變換文字
        columnNameArray.unshift(spanForColumnNameDiv.textContent); // 加入陣列儲存

        statistics(); // 摘要統計
        Grouping(); // 進行顏色分組
        appearRange(); // 顯示範圍框
    }



    // 拿取後端資料
	function getBackEndData(){
    selectColumnDiv.style.visibility = 'hidden';

    var themeCalled = document.getElementById("themeCalled").textContent;
    var descriptCalled = document.getElementById("descriptCalled").textContent;
    var resourceCalled = document.getElementById("resourceCalled").textContent;
    var svgMapCalled = parseInt(document.getElementById("svgMapCalled").textContent);
    var townNameCalled = (document.getElementById("townNameCalled").textContent);
    var backGroundCalled = parseInt(document.getElementById("backGroundCalled").textContent);
    var inputDataCalled = document.getElementById("inputDataCalled").textContent;
    var rangeGroupCalled = parseInt(document.getElementById("rangeGroupCalled").textContent);
    var mapColorCalled = parseInt(document.getElementById("mapColorCalled").textContent);
    var columnNameCalled = (document.getElementById("columnNameCalled").textContent);
    var selectColumnCalled = document.getElementById("selectColumnCalled").textContent;
    var selectTownCalled = document.getElementById("selectTownCalled").textContent;
    var fileNameCalled = document.getElementById("fileNameCalled").textContent;
    var unitCalled = document.getElementById("unitCalled").textContent;
    var chartCountCalled = document.getElementById("chartCountCalled").textContent;
    var DataCalled = document.getElementById("DataCalled").textContent;
    if(themeCalled != ""){
        divForDescripBoxBackDrop.style.visibility = 'hidden';
        stepBoxBackDropDiv.style.visibility = 'hidden';
    }
    

    recordTheme = themeCalled
    recordDescript = descriptCalled
    recordResource = resourceCalled

    showDES.getElementsByTagName('span')[0].textContent = recordDescript
    showRES.getElementsByTagName('span')[0].textContent = resourceCalled

    inputTheme.style.display = 'none'; // 隱藏文字輸入框
    divForDesTheme.style.display = 'block'; // 顯示敘述完成框
    divForDesTheme.textContent = recordTheme;

    textarea.style.display = 'none'; // 隱藏文字輸入框
    divForFinish.style.display = 'block'; // 顯示敘述完成框
    divForFinish.textContent = recordDescript;

    inputResource.style.display = 'none'; // 隱藏資料來源輸入框
    divForinputResource.style.display = 'block'; // 顯示資料來源完成框
    divForinputResource.textContent = recordResource;

    finishBtn.style.display = 'none'
    clearBtn.style.display = 'none'
    recordFileName = fileNameCalled;
    fileNameDiv_child.textContent = recordFileName;
    fileNameDiv_child.style.fontSize = 24 + 'px'
    currentMap = svgMapCalled;
    townArea(currentMap);
    recordBackGround = backGroundCalled;
    changeBackGround(recordBackGround);
    closeBTN.style.top = -490 + 'px';
    editBtn.style.display = 'block';
    document.getElementById('chooseMethod').style.visibility = 'hidden';
    uploadedFileName = recordFileName;
    
    groupNum = rangeGroupCalled;
    Grouping(); // 分組
    selectForGroup.value = groupNum;
    
    var inputDataStr = inputDataCalled;
    var JsonStringforInputData = inputDataStr.replace(/'/g, '"');
    InputData = JSON.parse(JsonStringforInputData)

    console.log(DataCalled)
    var DataStr = DataCalled;
    var JsonStringforData = DataStr.replace(/'/g, '"');
    forBlankData = JSON.parse(JsonStringforData)
    buttonVisible();
    currentColorID = mapColorCalled;
    currentColorDiv = allColor[currentColorID];

    townName.textContent = recordTheme // 只顯示縣市名稱
    townName.style.overflow = 'hidden';
    posForColumnDiv = columnNameCalled;
    renderColumnText(); // 生成欄位名稱區塊(地圖變換用)
    spanForColumnNameDiv.textContent = InputData[0][posForColumnDiv];
    columnNameArray.unshift(spanForColumnNameDiv.textContent);
    townArea(currentMap);


    recordUnit = unitCalled;
    unit.value = recordUnit;
    appearRange()
    showOriginalBtn.style.visibility = 'visible'; // 顯示原始檔案
    var inputselectedColumn = selectColumnCalled;
    var JsonStringforColumn = inputselectedColumn.replace(/'/g, '"');
    selectedColumnIndices = JSON.parse(JsonStringforColumn)
    console.log(selectedColumnIndices)
    
    var inputselectedRows = selectTownCalled;
    console.log(inputselectedRows)
    var JsonStringforRows = inputselectedRows.replace(/'/g, '"');
    selectedRows = JSON.parse(JsonStringforRows)
    console.log(selectedRows)

    renderColumnSelect(); // 生成欄位下拉式清單
    
    var ColumnIndices = selectColumnData.getElementsByTagName('input');
    for(var i = 0; i < ColumnIndices.length; i++){
        if(selectedColumnIndices.indexOf(parseInt(ColumnIndices[i].value)) != -1){
            ColumnIndices[i].checked = true;
        }
    }

    renderRowSelect();
    var Rows = selectTownData.getElementsByTagName('input');
    for(var i = 0; i < Rows.length; i++){
        if(selectedRows.indexOf(Rows[i].value) != -1){
            Rows[i].checked = true;
        }
    }

    // var inputcheckWhichCharts = checkWhichChartsCalled;
    // var JsonStringforcheckWhichCharts = inputcheckWhichCharts.replace(/'/g, '"');
    // checkWhichCharts = JSON.parse(JsonStringforcheckWhichCharts)
    // console.log(checkWhichCharts)

    // var newArr = [];
    
    // for(var i = 0; i < checkWhichCharts.length; i++){
    //     if(checkWhichCharts[i] == 'chartContainer'){ // 點擊柱狀圖的預覽
    //         newArr.push('column')
    //     }else if(checkWhichCharts[i] == 'piechartContainer'){ // 點擊圓餅圖的預覽
    //         newArr.push('pie')
    //     }else if(checkWhichCharts[i] == 'linechartContainer'){ // 點擊折線圖的預覽
    //         newArr.push('line')
    //     }else if(checkWhichCharts[i] == 'areachartContainer'){ // 點擊區域圖的預覽
    //         newArr.push('area')
    //     }else if(checkWhichCharts[i] == 'barchartContainer'){ // 點擊長條圖的預覽
    //         newArr.push('Bar')
    //     }else if(checkWhichCharts[i] == 'bubblechartContainer'){ // 點擊組合圖的預覽
    //         newArr.push('bubble')
    //     }else if(checkWhichCharts[i] == 'stackchartContainer'){ // 點擊推疊梯狀圖的預覽
    //         newArr.push('stack')
    //     }else if(checkWhichCharts[i] == 'pieholeContainer'){ // 點擊推疊梯狀圖的預覽
    //         newArr.push('piehole')
    //     }else if(checkWhichCharts[i] == 'histogramContainer'){ // 點擊推疊梯狀圖的預覽
    //         newArr.push('histogram')
    //     }else if(checkWhichCharts[i] == 'scatterchartContainer'){ // 點擊散佈圖的預覽
    //         newArr.push('scatter')
    //     }
        
    // }

    // for(var i = 0; i < newArr.length; i++){
    //     selectedRows.push(newArr[i])
    // }
    // console.log(selectedRows)
    // console.log(checkWhichCharts)
    
    var chartType = chartTypeSelect.getElementsByTagName('input');
    console.log(chartType);
    for(var i = 0; i < chartType.length; i++){
        if(selectedRows.indexOf(chartType[i].value) != -1){
            chartType[i].checked = true;
        }
    }

    
    updateChartDisplay();

    selectedChartCount = chartCountCalled
    var chartTypeCheckbox = document.querySelectorAll('#chartTypeSelect input[type="checkbox"]');
    chartTypeCheckbox.forEach(function (checkbox) {
        checkbox.addEventListener('change', handleChartTypeChange);
    });

    if (selectedChartCount >= 4) {
        
            
            chartTypeCheckbox.forEach(function (checkbox) {

                //已選擇的圖表數量還沒達到最大允許的數量
                if(checkbox.checked || (selectedChartCount < 4)) {
                    //就是可用的，且文字顏色為黑色
                    checkbox.disabled = false;
                    checkbox.parentNode.style.color = 'aqua';
                }else{
                    //否則不可用，且文字顏色為灰色
                    checkbox.disabled = true;
                    checkbox.parentNode.style.color = 'black';
                }
            });
        
    }
}



    

