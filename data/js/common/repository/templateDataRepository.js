//menu 
            const menuBodyTemplate  = 
                `
                <div class="col menu-block-section">
                    <button
                        onclick="hideChangeChevron('menu-block-section-list', 'menu-block-section-chevron-data', this)"
                        id="@@MENUSECTIONID@@"
                        class="col w-100 px-3 menu-block-section-name-button">

                        <div class="row d-flex justify-content-between">
                            <div class="col label">
                                @@MENUSECTIONNAME@@
                            </div>
                            <div class="col-auto d-flex align-items-center menu-block-section-chevron-data-@@MENUSECTIONID@@">
                                <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
                            </div>
                        </div>
                    </button>
                    <div class="col menu-block-section-list menu-block-section-list-@@MENUSECTIONID@@"
                        style="display: block;">
                        <ul>
                            @@MENUSECTIONITEMLIST@@                
                        </ul>
                    </div>
                </div>
                `;

            const menuItemTemplate = 
                `
                <li><a href="@@MENUITEMLINK@@" class="w-100 p-0">
                    <div class="row m-0">
                        <div class="col-1 p-0 image-data">
                            @@MENUITEMLOGO@@
                        </div>
                        <div class="col content-data strike_line">@@MENUITEMNAME@@</div>
                    </div>
                </a></li>
                `;
    
// filter - selector
            const selectorTemplate = 
                `
                <div class="filter-grid-group-data-item">
                    <div class="col">
                        <select name="@@SELECTORNAME@@" id="@@SELECTORID@@" onchange="@@SELECTORFUNCTION@@">
                            @@SELECTORBODY@@                            
                        </select>
                    </div>                                                        
                </div>
                `;
            const selectorDefaultItemTemplate = 
                `
                <option value="" disabled selected>@@DEFITEMNAME@@</option>
                `;
            const selectorItemTemplate = 
                `
                <option value="@@ITEMVALUE@@" armtype="@@ITEMTYPE@@">@@ITEMNAME@@</option>
                `;

//kido-armament grid item
            const KAGridItemTemplate = 
                `
                <div class="grid-abilities-item px-1">
                    <a href="@@ITEMLINK@@" class="abilities-info-block">                                                                                
                        <div class="row abilities-info-block-data">
                            <div class="col left-align-data">                                                                                            
                                <span class="level">
                                    <span class="gray-font">[</span>@@ITEMLEVEL@@<span class="gray-font">]</span>
                                </span>
                                <span class="school-logo">
                                    @@ITEMSCHOOLLOGO@@                                                                                   
                                </span>
                                <span class="name">@@ITEMNAME@@</span>
                            </div>
                            <div class="col-auto components">@@ITEMCOMPONENTS@@</div>
                        </div>  
                        <hr class="abilities-hr-gradient">                                                                                
                    </a>
                </div>
                `;