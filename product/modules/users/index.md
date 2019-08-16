---
title: Users Bar
layout: page
---

<div class="container p-0">

    <div class="l-flex flex-justify-between flex-align-center flex-wrap m-bottom-5">
        <h1 class="t-5 t-semibold m-bottom-0">Manage Users</h1>
        <div class="l-flex flex-align-center">
            <a href="#" class="Button Button--text m-right-2__l l-none l-inline-block__l">
                <svg class="Icon Icon--size-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 37.7 51">
                    <path d="M37.4 11.4l-.2-.2L26.3.3c-.1-.1-.3-.2-.5-.3H1.1C.5 0 0 .5 0 1.1v48.8c0 .6.5 1.1 1.1 1.1h35.5c.6 0 1.1-.5 1.1-1.1V12.2c0-.3-.1-.6-.3-.8zM26.6 3.8l7.3 7.3h-7.3V3.8zm8.9 45H2.2V2.2h22.2v10c0 .6.5 1.1 1.1 1.1h10v35.5z"></path>
                    <defs>
                        <path id="doc-a" d="M29.9 39.9H7.8c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1H30c.6 0 1.1-.5 1.1-1.1s-.6-1.1-1.2-1.1z"></path>
                    </defs>
                    <use xlink:href="#doc-a" overflow="visible"></use>
                    <defs>
                        <path id="doc-b" d="M29.9 33.3H7.8c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1H30c.6 0 1.1-.5 1.1-1.1s-.6-1.1-1.2-1.1z"></path>
                    </defs>
                    <use xlink:href="#doc-b" overflow="visible"></use>
                    <defs>
                        <path id="doc-c" d="M29.9 26.6H7.8c-.6 0-1.1.5-1.1 1.1 0 .6.5 1.1 1.1 1.1H30c.6 0 1.1-.5 1.1-1.1-.1-.6-.6-1.1-1.2-1.1z"></path>
                    </defs>
                    <use xlink:href="#doc-c" overflow="visible"></use>
                    <g>
                        <defs>
                            <path id="d" d="M29.9 20H7.8c-.6 0-1.1.5-1.1 1.1 0 .6.5 1.1 1.1 1.1H30c.6 0 1.1-.5 1.1-1.1-.1-.6-.6-1.1-1.2-1.1z"></path>
                        </defs>
                        <use xlink:href="#doc-d" overflow="visible"></use>
                    </g>
                </svg>
                Read About FTP & SSH
            </a>
            <button class="js-toggle-add-user Button Button--primary l-none l-inline-block__l">Add New User</button>
        </div>
    </div>

    <div class="AddUser Bar l-none m-bottom-4">

        <div class="User__edit p-2 p-3__m">
            <div class="row m-bottom-3">
                <div class="col-12 col-lg-7 col-xl-8">
                    <h2 class="t-semibold t-2 m-bottom-1">Add New User</h2>
                </div>
                
                <div class="col-12 col-lg-5 col-xl-4">
                    <a href="#" class="t-bold">Learn More About Adding New Users</a>
                </div>
                
            </div>

            <div class="row m-bottom-2">

                <div class="col-12 col-xl-4 m-bottom-3 m-bottom-0__l">

                    <div class="Form__group">
                        <label for="input1" class="Form__label m-bottom-2">Edit The Full Name</label>
                        <input id="input1" type="text" class="Input" placeholder="Example placeholder content">
                    </div>

                    <div class="Form__group">
                        <label for="input1" class="Form__label">New Password</label>
                        <input id="input1" type="text" class="Input" placeholder="Example placeholder content">
                        <label class="Choice m-top-2">
                            <input type="checkbox" name="check1">
                            <span class="Choice__label">Generate Random Password</span>
                        </label>
                    </div>

                </div>

                <div class="col-12 col-xl-4 m-bottom-6 m-bottom-0__l">
                    <label class="Form__label m-bottom-2">Type of user account:</label>

                    <form class="RadioButtonGroup">

                        <input type="radio" id="ftp-new-user" name="RadioButtonGroup1" value="ftp" checked />
                        <label for="ftp-new-user">
                            FTP
                        </label>

                        <input type="radio" id="sftp-new-user" name="RadioButtonGroup1" value="sftp" />
                        <label for="sftp-new-user">
                            SFTP
                        </label>

                        <input type="radio" id="ssh-new-user" name="RadioButtonGroup1" value="ssh" />
                        <label for="ssh-new-user">
                            Shell
                        </label>

                        <!-- RadioButtonGroup__Details -->
                        <div class="RadioButtonGroup__Details">
                            <div class="RadioButtonGroup__Details__Area">
                                FTP User — Allows login via FTP for file transfers only
                            </div>
                            <div class="RadioButtonGroup__Details__Area">
                                <p>SFTP User — Allows login via SFTP (SSH File Transfer) for file transfers only</p>
                                <div class="Form__group">
                                    <label class="Choice">
                                        <input type="checkbox" name="check1" checked>
                                        <span class="Choice__label">Disallow FTP</span>
                                    </label>
                                </div>
                            </div>
                            <div class="RadioButtonGroup__Details__Area">
                                <p><span class="t-bold">Shell User</span> — Allows login via SSH (secure shell) for command-line access, as well as SFTP.</p>
                                <div class="Form__group Form__group--select m-bottom-2">
                                    <label for="select1" class="Form__label">Shell Type:</label>
                                    <select id="select1" class="Select">
                                        <option>/bin/bash</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                        <option>Option 4</option>
                                        <option>Option 5</option>
                                    </select>
                                </div>

                                <div class="Form__group">
                                    <label class="Choice">
                                        <input type="checkbox" name="check1" checked>
                                        <span class="Choice__label">Disallow FTP</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                    </form>

                </div>
                <!-- end .col-4 -->

                <div class="col-12 col-xl-4 m-bottom-4 m-bottom-0__l">

                    <div class="Form__group l-flex flex-row flex-column__l flex-align-center flex-align-start__l flex-justify-between">
                        <label class="Form__label m-bottom-2__l m-right-0__l">SSH Protocol:</label>

                        <div class="Toggle">
                            <input class="Toggle__input" type="checkbox" id="UNIQUE-ID">
                            <label for="UNIQUE-ID" class="Toggle__label">
                                <span class="Toggle__visible"></span>
                            </label>
                        </div>
                    </div>
                    <div class="Form__group l-flex flex-row flex-column__l flex-align-center flex-align-start__l flex-justify-between">
                        <label class="Form__label m-bottom-2__l m-right-0__l">Enhanced Security:</label>

                        <div class="Toggle">
                            <input class="Toggle__input" type="checkbox" id="UNIQUE-ID2">
                            <label for="UNIQUE-ID2" class="Toggle__label">
                                <span class="Toggle__visible"></span>
                            </label>
                        </div>
                    </div>
                    <div class="Form__group l-flex flex-row flex-column__l flex-align-center flex-align-start__l flex-justify-between">
                        <label class="Form__label m-bottom-2__l m-right-0__l">CPU Reporting:</label>

                        <div class="Toggle">
                            <input class="Toggle__input" type="checkbox" id="UNIQUE-ID3">
                            <label for="UNIQUE-ID3" class="Toggle__label">
                                <span class="Toggle__visible"></span>
                            </label>
                        </div>
                    </div>

                </div>

            </div>

            <div class="t-right">
                <button class="js-toggle-add-user Button l-block l-inline-block__m w-100 w-auto__m m-bottom-3 m-bottom-0__m">Cancel</button>
                <button class="js-add-user Button Button--primary l-block l-inline-block__m w-100 w-auto__m m-left-0 m-left-1__m">Save Changes</button>
            </div>

        </div>

    </div>
		<hr class="l-none__l" />
    <h2 class="t-3 t-semibold">Shared</h2>

    <div class="User Bar">

        <div class="User__details p-2 p-3__m">
            <div class="Avatar User__details__avatar"><img src="https://placekitten.com/32/32" class="u-border-radius-circle l-block m-bottom-0" /></div>
            <div class="User__details__info l-flex flex-column flex-row__l flex-grow-1">
                <div class="User__details__description t-1 t-bold p-y-half t-truncate m-right-2__l">Ian's FTP Access</div>
                <div class="User__details__url t-1 p-y-half flex m-right-2__l"><span class="t-truncate l-inline-block">ianhernandez.com</span><span class="t-c-b300 m-left-1">+1</span></div>
            </div>
            <button class="js-show-login-details User__details__login-info flex-shrink-0 t-c-g300 flex__m flex-align-center__m p-0 bg-transparent border-0">
                <span class="l-none t-body t-1 t-c-g500 t-bold m-right-1 l-block__l">Login Info</span>
                <svg class="Icon Icon--size-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M443.5 162.6l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L224 351 28.5 155.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.7 4.8-12.3.1-17z" />
                </svg>
            </button>

            <div class="User__details__actions l-none flex-align-center__l">
                <button class="Button Button--dark">
                    <svg class="Icon Icon--size-1 m-right-1 m-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 30">
                        <path d="M.8 29.3h32.4c.4 0 .8-.3.8-.8v-20c0-.4-.3-.8-.8-.8H14.4l-5-4.4c-.2-.1-.3-.2-.5-.2H.8c-.5 0-.8.3-.8.8v24.7c0 .3.3.7.8.7zm.7-24.7h7L13.6 9c.1.1.3.2.5.2h18.2v18.5H1.5V4.6z"></path>
                        <path d="M36.2 4.6H16L10.9.2c-.1-.1-.3-.2-.5-.2H4.6c-.4 0-.7.3-.7.8 0 .4.3.8.8.8h5.5l5 4.4c.1.1.3.2.5.2h19.8v18.5c0 .4.4.8.8.7.4 0 .7-.3.7-.7V5.4c0-.4-.3-.8-.8-.8z"></path>
                    </svg>
                    Manage Files</button>
                <button class="Button js-edit-user">Edit User</button>
            </div>
        </div>

        <div class="User__login-info l-none p-2 p-3__m p-top-0__l l-flex flex-align-center__l flex-column flex-row__l">
            <div class="User__login-info__group">
                <label for="" class="Form__label">Host Name</label>
                <div class="flex flex-justify-between flex-align-center bg-c-b100 u-border-radius m-top-1 m-bottom-3 m-bottom-0__l">
                    <input id="" type="text" class="Input border-0 m-top-0 bg-c-b100" placeholder="Poopoo" disabled>
                    <svg title="Copy to clipboard" class="Icon Icon--size-2 m-x-1 t-c-b300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53 51">
                        <path d="M20.2 19.6h20.2v3.9H20.2zM20.2 27.5h20.2v3.9H20.2zM20.2 35.3h12.1v3.9H20.2z" />
                        <path d="M44.5 7.9h-4V4c0-2.2-1.8-3.9-4-3.9H8.1C5.9.1 4 1.8 4 4v35.2c0 2.2 1.8 3.9 4 3.9h4V47c0 2.2 1.8 3.9 4 3.9h28.3c2.2 0 4-1.7 4-3.9V11.8c.2-2.1-1.6-3.9-3.8-3.9zm-32.4 3.9v27.4h-4V4h28.3v3.9H16.2c-2.3 0-4.1 1.8-4.1 3.9zM44.5 47H16.2V11.8h28.3V47z" />
                    </svg>
                </div>
            </div>
            <div class="User__login-info__group">
                <label for="" class="Form__label">Username</label>
                <div class="flex flex-justify-between flex-align-center bg-c-b100 u-border-radius m-top-1 m-bottom-3 m-bottom-0__l">
                    <input id="" type="text" class="Input border-0 m-top-0 bg-c-b100" placeholder="Poopoo" disabled>
                    <svg title="Copy to clipboard" class="Icon Icon--size-2 m-x-1 t-c-b300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53 51">
                        <path d="M20.2 19.6h20.2v3.9H20.2zM20.2 27.5h20.2v3.9H20.2zM20.2 35.3h12.1v3.9H20.2z" />
                        <path d="M44.5 7.9h-4V4c0-2.2-1.8-3.9-4-3.9H8.1C5.9.1 4 1.8 4 4v35.2c0 2.2 1.8 3.9 4 3.9h4V47c0 2.2 1.8 3.9 4 3.9h28.3c2.2 0 4-1.7 4-3.9V11.8c.2-2.1-1.6-3.9-3.8-3.9zm-32.4 3.9v27.4h-4V4h28.3v3.9H16.2c-2.3 0-4.1 1.8-4.1 3.9zM44.5 47H16.2V11.8h28.3V47z" />
                    </svg>
                </div>
            </div>
            <div class="User__login-info__group">
                <label for="" class="Form__label">Password</label>
                <div class="flex flex-justify-between flex-align-center bg-c-b100 u-border-radius m-top-1 m-bottom-3 m-bottom-0__l">
                    <input id="" type="text" class="Input border-0 m-top-0 bg-c-b100" placeholder="Poopoo" disabled>
                    <svg title="Copy to clipboard" class="Icon Icon--size-2 m-x-1 t-c-b300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53 51">
                        <path d="M20.2 19.6h20.2v3.9H20.2zM20.2 27.5h20.2v3.9H20.2zM20.2 35.3h12.1v3.9H20.2z" />
                        <path d="M44.5 7.9h-4V4c0-2.2-1.8-3.9-4-3.9H8.1C5.9.1 4 1.8 4 4v35.2c0 2.2 1.8 3.9 4 3.9h4V47c0 2.2 1.8 3.9 4 3.9h28.3c2.2 0 4-1.7 4-3.9V11.8c.2-2.1-1.6-3.9-3.8-3.9zm-32.4 3.9v27.4h-4V4h28.3v3.9H16.2c-2.3 0-4.1 1.8-4.1 3.9zM44.5 47H16.2V11.8h28.3V47z" />
                    </svg>
                </div>
            </div>

            <div class="User__login-info__group m-top-3 m-top-0__l flex flex-column__l flex-justify-between">
                <label for="" class="Form__label m-bottom-3__l">Port</label>
                <span class="t-line-height-1">22</span>
            </div>

            <div class="User__login-info__group flex-shrink-0 m-top-2 m-top-0__l flex flex-column__l flex-align-center flex-align-start__l flex-justify-between">
                <label for="" class="Form__label m-bottom-3__l">SSH Protocol</label>
                <span class="Form__label t-line-height-1">On</span>
            </div>

            <div class="m-top-4 l-none__l flex-align-center">
                <button class="Button Button--dark Button--block p-x-3 m-top-3">Manage Files</button>
                <button class="Button Button--block m-top-2 js-edit-user">Edit User</button>
            </div>

        </div>
        <!-- end user details -->

        <div class="User__edit l-none p-2 p-3__m">

            
        <div class="row m-bottom-2">

            <div class="col-12 col-xl-4 m-bottom-3 m-bottom-0__l">

                <div class="Form__group">
                    <label for="input1" class="Form__label m-bottom-2">Edit The Full Name</label>
                    <input id="input1" type="text" class="Input" placeholder="Example placeholder content">
                </div>

                <div class="Form__group">
                    <label for="input1" class="Form__label">New Password</label>
                    <input id="input1" type="text" class="Input" placeholder="Example placeholder content">
                    <label class="Choice m-top-2">
                        <input type="checkbox" name="check1">
                        <span class="Choice__label">Generate Random Password</span>
                    </label>
                </div>

            </div>

            <div class="col-12 col-xl-4 offset-xl-1 m-bottom-6 m-bottom-0__l">
                <label class="Form__label m-bottom-2">Type of user account:</label>

                <form class="RadioButtonGroup">

                    <input type="radio" id="ftp-new-user2" name="RadioButtonGroup1" value="ftp" checked />
                    <label for="ftp-new-user2">
                        FTP
                    </label>

                    <input type="radio" id="sftp-new-user2" name="RadioButtonGroup1" value="sftp" />
                    <label for="sftp-new-user2">
                        SFTP
                    </label>

                    <input type="radio" id="ssh-new-user2" name="RadioButtonGroup1" value="ssh" />
                    <label for="ssh-new-user2">
                        Shell
                    </label>

                    <!-- RadioButtonGroup__Details -->
                    <div class="RadioButtonGroup__Details">
                        <div class="RadioButtonGroup__Details__Area">
                            FTP User — Allows login via FTP for file transfers only
                        </div>
                        <div class="RadioButtonGroup__Details__Area">
                            <p>SFTP User — Allows login via SFTP (SSH File Transfer) for file transfers only</p>
                            <div class="Form__group">
                                <label class="Choice">
                                    <input type="checkbox" name="check1" checked>
                                    <span class="Choice__label">Disallow FTP</span>
                                </label>
                            </div>
                        </div>
                        <div class="RadioButtonGroup__Details__Area">
                            <p><span class="t-bold">Shell User</span> — Allows login via SSH (secure shell) for command-line access, as well as SFTP.</p>
                            <div class="Form__group Form__group--select m-bottom-2">
                                <label for="select1" class="Form__label">Shell Type:</label>
                                <select id="select1" class="Select">
                                    <option>/bin/bash</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                    <option>Option 4</option>
                                    <option>Option 5</option>
                                </select>
                            </div>

                            <div class="Form__group">
                                <label class="Choice">
                                    <input type="checkbox" name="check1" checked>
                                    <span class="Choice__label">Disallow FTP</span>
                                </label>
                            </div>
                        </div>
                    </div>

                </form>

            </div>
            <!-- end .col-4 -->

            <div class="col-12 col-xl-3 m-bottom-4 m-bottom-0__l">

                <div class="Form__group l-flex flex-row flex-column__l flex-align-center flex-align-start__l flex-justify-between">
                    <label class="Form__label m-bottom-2__l m-right-0__l">SSH Protocol:</label>

                    <div class="Toggle">
                        <input class="Toggle__input" type="checkbox" id="UNIQUE-ID4">
                        <label for="UNIQUE-ID4" class="Toggle__label">
                            <span class="Toggle__visible"></span>
                        </label>
                    </div>
                </div>
                <div class="Form__group l-flex flex-row flex-column__l flex-align-center flex-align-start__l flex-justify-between">
                    <label class="Form__label m-bottom-2__l m-right-0__l">Enhanced Security:</label>

                    <div class="Toggle">
                        <input class="Toggle__input" type="checkbox" id="UNIQUE-ID5">
                        <label for="UNIQUE-ID5" class="Toggle__label">
                            <span class="Toggle__visible"></span>
                        </label>
                    </div>
                </div>
                <div class="Form__group l-flex flex-row flex-column__l flex-align-center flex-align-start__l flex-justify-between">
                    <label class="Form__label m-bottom-2__l m-right-0__l">CPU Reporting:</label>

                    <div class="Toggle">
                        <input class="Toggle__input" type="checkbox" id="UNIQUE-ID6">
                        <label for="UNIQUE-ID6" class="Toggle__label">
                            <span class="Toggle__visible"></span>
                        </label>
                    </div>
                </div>

            </div>

            </div>


            <div class="row">
                <div class="col-12 col-lg-4 t-center t-left__l">
                    <button class="js-edit-user-delete Button Button--danger l-block l-inline-block__l w-100 w-auto__l m-bottom-3 m-bottom-0__l">Delete This User</button>
                </div>
                <div class="col-12 col-lg-8 t-right">
                    <button class="js-edit-user-cancel Button l-block l-inline-block__m w-100 w-auto__m m-bottom-3 m-bottom-0__m">Cancel</button>
                    <button class="Button Button--primary l-block l-inline-block__m w-100 w-auto__m m-left-0 m-left-1__m">Save Changes</button>
                </div>
            </div>

        </div>

        <div class="User__delete bg-c-g100 l-none no-gutters flex-justify-between flex-align-center flex-align-end__l p-3 border-top border-c-g200 flex-column flex-row__l">
            <div class="col-xl-7">
                <h3 class="m-top-0 m-bottom-3 t-body t-bold">Do you want to delete this user?</h3>
                <p class="m-bottom-3 m-bottom-0__l">Deleting this user will cause all of its associated data and settings to be <strong>permanently</strong> deleted and you will not be able to recreate a user with the same name. Are you sure?</p>
            </div>
            <div class="col-xl-4 offset-lg-1 flex flex-justify-end flex-column flex-row__l">
                <button class="js-edit-user-delete-confirm Button Button--danger bg-c-r300 t-c-w100 p-x-3 m-right-2__l">Yes, delete user</button>
                <button class="js-edit-user-delete-cancel Button Button--dark bg-c-w100 t-c-g500 border-c-g200 m-left-0 m-top-3 m-top-0__l js-delete-mode-on-click">Cancel</button>
            </div>
        </div>

    </div>
    <div class="User Bar">

        <div class="User__details p-2 p-3__m">
            <div class="Avatar User__details__avatar"><img src="https://placekitten.com/32/32" class="u-border-radius-circle l-block m-bottom-0" /></div>
            <div class="User__details__info l-flex flex-column flex-row__l flex-grow-1">
                <div class="User__details__description t-1 t-bold p-y-half t-truncate m-right-2__l">Ian's FTP Access</div>
                <div class="User__details__url t-1 p-y-half flex m-right-2__l"><span class="t-truncate l-inline-block">ianhernandez.com</span><span class="t-c-b300 m-left-1">+1</span></div>
            </div>
            <button class="js-show-login-details User__details__login-info flex-shrink-0 t-c-g300 flex__m flex-align-center__m p-0 bg-transparent border-0">
                <span class="l-none t-body t-1 t-c-g500 t-bold m-right-1 l-block__l">Login Info</span>
                <svg class="Icon Icon--size-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M443.5 162.6l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L224 351 28.5 155.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.7 4.8-12.3.1-17z" />
                </svg>
            </button>

            <div class="User__details__actions l-none flex-align-center__l">
                <button class="Button Button--dark">
                    <svg class="Icon Icon--size-1 m-right-1 m-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 30">
                        <path d="M.8 29.3h32.4c.4 0 .8-.3.8-.8v-20c0-.4-.3-.8-.8-.8H14.4l-5-4.4c-.2-.1-.3-.2-.5-.2H.8c-.5 0-.8.3-.8.8v24.7c0 .3.3.7.8.7zm.7-24.7h7L13.6 9c.1.1.3.2.5.2h18.2v18.5H1.5V4.6z"></path>
                        <path d="M36.2 4.6H16L10.9.2c-.1-.1-.3-.2-.5-.2H4.6c-.4 0-.7.3-.7.8 0 .4.3.8.8.8h5.5l5 4.4c.1.1.3.2.5.2h19.8v18.5c0 .4.4.8.8.7.4 0 .7-.3.7-.7V5.4c0-.4-.3-.8-.8-.8z"></path>
                    </svg>
                    Manage Files</button>
                <button class="Button js-edit-user">Edit User</button>
            </div>
        </div>

        <div class="User__login-info l-none p-2 p-3__m p-top-0__l l-flex flex-align-center__l flex-column flex-row__l">
            <div class="User__login-info__group">
                <label for="" class="Form__label">Host Name</label>
                <div class="flex flex-justify-between flex-align-center bg-c-b100 u-border-radius m-top-1 m-bottom-3 m-bottom-0__l">
                    <input id="" type="text" class="Input border-0 m-top-0 bg-c-b100" placeholder="Poopoo" disabled>
                    <svg title="Copy to clipboard" class="Icon Icon--size-2 m-x-1 t-c-b300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53 51">
                        <path d="M20.2 19.6h20.2v3.9H20.2zM20.2 27.5h20.2v3.9H20.2zM20.2 35.3h12.1v3.9H20.2z" />
                        <path d="M44.5 7.9h-4V4c0-2.2-1.8-3.9-4-3.9H8.1C5.9.1 4 1.8 4 4v35.2c0 2.2 1.8 3.9 4 3.9h4V47c0 2.2 1.8 3.9 4 3.9h28.3c2.2 0 4-1.7 4-3.9V11.8c.2-2.1-1.6-3.9-3.8-3.9zm-32.4 3.9v27.4h-4V4h28.3v3.9H16.2c-2.3 0-4.1 1.8-4.1 3.9zM44.5 47H16.2V11.8h28.3V47z" />
                    </svg>
                </div>
            </div>
            <div class="User__login-info__group">
                <label for="" class="Form__label">Username</label>
                <div class="flex flex-justify-between flex-align-center bg-c-b100 u-border-radius m-top-1 m-bottom-3 m-bottom-0__l">
                    <input id="" type="text" class="Input border-0 m-top-0 bg-c-b100" placeholder="Poopoo" disabled>
                    <svg title="Copy to clipboard" class="Icon Icon--size-2 m-x-1 t-c-b300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53 51">
                        <path d="M20.2 19.6h20.2v3.9H20.2zM20.2 27.5h20.2v3.9H20.2zM20.2 35.3h12.1v3.9H20.2z" />
                        <path d="M44.5 7.9h-4V4c0-2.2-1.8-3.9-4-3.9H8.1C5.9.1 4 1.8 4 4v35.2c0 2.2 1.8 3.9 4 3.9h4V47c0 2.2 1.8 3.9 4 3.9h28.3c2.2 0 4-1.7 4-3.9V11.8c.2-2.1-1.6-3.9-3.8-3.9zm-32.4 3.9v27.4h-4V4h28.3v3.9H16.2c-2.3 0-4.1 1.8-4.1 3.9zM44.5 47H16.2V11.8h28.3V47z" />
                    </svg>
                </div>
            </div>
            <div class="User__login-info__group">
                <label for="" class="Form__label">Password</label>
                <div class="flex flex-justify-between flex-align-center bg-c-b100 u-border-radius m-top-1 m-bottom-3 m-bottom-0__l">
                    <input id="" type="text" class="Input border-0 m-top-0 bg-c-b100" placeholder="Poopoo" disabled>
                    <svg title="Copy to clipboard" class="Icon Icon--size-2 m-x-1 t-c-b300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53 51">
                        <path d="M20.2 19.6h20.2v3.9H20.2zM20.2 27.5h20.2v3.9H20.2zM20.2 35.3h12.1v3.9H20.2z" />
                        <path d="M44.5 7.9h-4V4c0-2.2-1.8-3.9-4-3.9H8.1C5.9.1 4 1.8 4 4v35.2c0 2.2 1.8 3.9 4 3.9h4V47c0 2.2 1.8 3.9 4 3.9h28.3c2.2 0 4-1.7 4-3.9V11.8c.2-2.1-1.6-3.9-3.8-3.9zm-32.4 3.9v27.4h-4V4h28.3v3.9H16.2c-2.3 0-4.1 1.8-4.1 3.9zM44.5 47H16.2V11.8h28.3V47z" />
                    </svg>
                </div>
            </div>

            <div class="User__login-info__group m-top-3 m-top-0__l flex flex-column__l flex-justify-between">
                <label for="" class="Form__label m-bottom-3__l">Port</label>
                <span class="t-line-height-1">22</span>
            </div>

            <div class="User__login-info__group flex-shrink-0 m-top-2 m-top-0__l flex flex-column__l flex-align-center flex-align-start__l flex-justify-between">
                <label for="" class="Form__label m-bottom-3__l">SSH Protocol</label>
                <span class="Form__label t-line-height-1">On</span>
            </div>

            <div class="m-top-4 l-none__l flex-align-center">
                <button class="Button Button--dark Button--block p-x-3 m-top-3">Manage Files</button>
                <button class="Button Button--block m-top-2 js-edit-user">Edit User</button>
            </div>

        </div>
        <!-- end user details -->

        <div class="User__edit l-none p-2 p-3__m">

            
        <div class="row m-bottom-2">

            <div class="col-12 col-xl-4 m-bottom-3 m-bottom-0__l">

                <div class="Form__group">
                    <label for="input1" class="Form__label m-bottom-2">Edit The Full Name</label>
                    <input id="input1" type="text" class="Input" placeholder="Example placeholder content">
                </div>

                <div class="Form__group">
                    <label for="input1" class="Form__label">New Password</label>
                    <input id="input1" type="text" class="Input" placeholder="Example placeholder content">
                    <label class="Choice m-top-2">
                        <input type="checkbox" name="check1">
                        <span class="Choice__label">Generate Random Password</span>
                    </label>
                </div>

            </div>

            <div class="col-12 col-xl-4 offset-xl-1 m-bottom-6 m-bottom-0__l">
                <label class="Form__label m-bottom-2">Type of user account:</label>

                <form class="RadioButtonGroup">

                    <input type="radio" id="ftp-new-user3" name="RadioButtonGroup1" value="ftp" checked />
                    <label for="ftp-new-user3">
                        FTP
                    </label>

                    <input type="radio" id="sftp-new-user3" name="RadioButtonGroup1" value="sftp" />
                    <label for="sftp-new-user3">
                        SFTP
                    </label>

                    <input type="radio" id="ssh-new-user3" name="RadioButtonGroup1" value="ssh" />
                    <label for="ssh-new-user3">
                        Shell
                    </label>

                    <!-- RadioButtonGroup__Details -->
                    <div class="RadioButtonGroup__Details">
                        <div class="RadioButtonGroup__Details__Area">
                            FTP User — Allows login via FTP for file transfers only
                        </div>
                        <div class="RadioButtonGroup__Details__Area">
                            <p>SFTP User — Allows login via SFTP (SSH File Transfer) for file transfers only</p>
                            <div class="Form__group">
                                <label class="Choice">
                                    <input type="checkbox" name="check1" checked>
                                    <span class="Choice__label">Disallow FTP</span>
                                </label>
                            </div>
                        </div>
                        <div class="RadioButtonGroup__Details__Area">
                            <p><span class="t-bold">Shell User</span> — Allows login via SSH (secure shell) for command-line access, as well as SFTP.</p>
                            <div class="Form__group Form__group--select m-bottom-2">
                                <label for="select1" class="Form__label">Shell Type:</label>
                                <select id="select1" class="Select">
                                    <option>/bin/bash</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                    <option>Option 4</option>
                                    <option>Option 5</option>
                                </select>
                            </div>

                            <div class="Form__group">
                                <label class="Choice">
                                    <input type="checkbox" name="check1" checked>
                                    <span class="Choice__label">Disallow FTP</span>
                                </label>
                            </div>
                        </div>
                    </div>

                </form>

            </div>
            <!-- end .col-4 -->

            <div class="col-12 col-xl-3 m-bottom-4 m-bottom-0__l">

                <div class="Form__group l-flex flex-row flex-column__l flex-align-center flex-align-start__l flex-justify-between">
                    <label class="Form__label m-bottom-2__l m-right-0__l">SSH Protocol:</label>

                    <div class="Toggle">
                        <input class="Toggle__input" type="checkbox" id="UNIQUE-ID4">
                        <label for="UNIQUE-ID4" class="Toggle__label">
                            <span class="Toggle__visible"></span>
                        </label>
                    </div>
                </div>
                <div class="Form__group l-flex flex-row flex-column__l flex-align-center flex-align-start__l flex-justify-between">
                    <label class="Form__label m-bottom-2__l m-right-0__l">Enhanced Security:</label>

                    <div class="Toggle">
                        <input class="Toggle__input" type="checkbox" id="UNIQUE-ID5">
                        <label for="UNIQUE-ID5" class="Toggle__label">
                            <span class="Toggle__visible"></span>
                        </label>
                    </div>
                </div>
                <div class="Form__group l-flex flex-row flex-column__l flex-align-center flex-align-start__l flex-justify-between">
                    <label class="Form__label m-bottom-2__l m-right-0__l">CPU Reporting:</label>

                    <div class="Toggle">
                        <input class="Toggle__input" type="checkbox" id="UNIQUE-ID6">
                        <label for="UNIQUE-ID6" class="Toggle__label">
                            <span class="Toggle__visible"></span>
                        </label>
                    </div>
                </div>

            </div>

            </div>


            <div class="row">
                <div class="col-12 col-lg-4 t-center t-left__l">
                    <button class="js-edit-user-delete Button Button--danger l-block l-inline-block__l w-100 w-auto__l m-bottom-3 m-bottom-0__l">Delete This User</button>
                </div>
                <div class="col-12 col-lg-8 t-right">
                    <button class="js-edit-user-cancel Button l-block l-inline-block__m w-100 w-auto__m m-bottom-3 m-bottom-0__m">Cancel</button>
                    <button class="Button Button--primary l-block l-inline-block__m w-100 w-auto__m m-left-0 m-left-1__m">Save Changes</button>
                </div>
            </div>

        </div>

        <div class="User__delete bg-c-g100 l-none no-gutters flex-justify-between flex-align-center flex-align-end__l p-3 border-top border-c-g200 flex-column flex-row__l">
            <div class="col-xl-7">
                <h3 class="m-top-0 m-bottom-3 t-body t-bold">Do you want to delete this user?</h3>
                <p class="m-bottom-3 m-bottom-0__l">Deleting this user will cause all of its associated data and settings to be <strong>permanently</strong> deleted and you will not be able to recreate a user with the same name. Are you sure?</p>
            </div>
            <div class="col-xl-4 offset-lg-1 flex flex-justify-end flex-column flex-row__l">
                <button class="js-edit-user-delete-confirm Button Button--danger bg-c-r300 t-c-w100 p-x-3 m-right-2__l">Yes, delete user</button>
                <button class="js-edit-user-delete-cancel Button Button--dark bg-c-w100 t-c-g500 border-c-g200 m-left-0 m-top-3 m-top-0__l js-delete-mode-on-click">Cancel</button>
            </div>
        </div>

    </div>
    <div class="User Bar">

        <div class="User__details p-2 p-3__m">
            <div class="Avatar User__details__avatar"><img src="https://placekitten.com/32/32" class="u-border-radius-circle l-block m-bottom-0" /></div>
            <div class="User__details__info l-flex flex-column flex-row__l flex-grow-1">
                <div class="User__details__description t-1 t-bold p-y-half t-truncate m-right-2__l">Ian's FTP Access</div>
                <div class="User__details__url t-1 p-y-half flex m-right-2__l"><span class="t-truncate l-inline-block">ianhernandez.com</span><span class="t-c-b300 m-left-1">+1</span></div>
            </div>
            <button class="js-show-login-details User__details__login-info flex-shrink-0 t-c-g300 flex__m flex-align-center__m p-0 bg-transparent border-0">
                <span class="l-none t-body t-1 t-c-g500 t-bold m-right-1 l-block__l">Login Info</span>
                <svg class="Icon Icon--size-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M443.5 162.6l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L224 351 28.5 155.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.7 4.8-12.3.1-17z" />
                </svg>
            </button>

            <div class="User__details__actions l-none flex-align-center__l">
                <button class="Button Button--dark">
                    <svg class="Icon Icon--size-1 m-right-1 m-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 30">
                        <path d="M.8 29.3h32.4c.4 0 .8-.3.8-.8v-20c0-.4-.3-.8-.8-.8H14.4l-5-4.4c-.2-.1-.3-.2-.5-.2H.8c-.5 0-.8.3-.8.8v24.7c0 .3.3.7.8.7zm.7-24.7h7L13.6 9c.1.1.3.2.5.2h18.2v18.5H1.5V4.6z"></path>
                        <path d="M36.2 4.6H16L10.9.2c-.1-.1-.3-.2-.5-.2H4.6c-.4 0-.7.3-.7.8 0 .4.3.8.8.8h5.5l5 4.4c.1.1.3.2.5.2h19.8v18.5c0 .4.4.8.8.7.4 0 .7-.3.7-.7V5.4c0-.4-.3-.8-.8-.8z"></path>
                    </svg>
                    Manage Files</button>
                <button class="Button js-edit-user">Edit User</button>
            </div>
        </div>

        <div class="User__login-info l-none p-2 p-3__m p-top-0__l l-flex flex-align-center__l flex-column flex-row__l">
            <div class="User__login-info__group">
                <label for="" class="Form__label">Host Name</label>
                <div class="flex flex-justify-between flex-align-center bg-c-b100 u-border-radius m-top-1 m-bottom-3 m-bottom-0__l">
                    <input id="" type="text" class="Input border-0 m-top-0 bg-c-b100" placeholder="Poopoo" disabled>
                    <svg title="Copy to clipboard" class="Icon Icon--size-2 m-x-1 t-c-b300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53 51">
                        <path d="M20.2 19.6h20.2v3.9H20.2zM20.2 27.5h20.2v3.9H20.2zM20.2 35.3h12.1v3.9H20.2z" />
                        <path d="M44.5 7.9h-4V4c0-2.2-1.8-3.9-4-3.9H8.1C5.9.1 4 1.8 4 4v35.2c0 2.2 1.8 3.9 4 3.9h4V47c0 2.2 1.8 3.9 4 3.9h28.3c2.2 0 4-1.7 4-3.9V11.8c.2-2.1-1.6-3.9-3.8-3.9zm-32.4 3.9v27.4h-4V4h28.3v3.9H16.2c-2.3 0-4.1 1.8-4.1 3.9zM44.5 47H16.2V11.8h28.3V47z" />
                    </svg>
                </div>
            </div>
            <div class="User__login-info__group">
                <label for="" class="Form__label">Username</label>
                <div class="flex flex-justify-between flex-align-center bg-c-b100 u-border-radius m-top-1 m-bottom-3 m-bottom-0__l">
                    <input id="" type="text" class="Input border-0 m-top-0 bg-c-b100" placeholder="Poopoo" disabled>
                    <svg title="Copy to clipboard" class="Icon Icon--size-2 m-x-1 t-c-b300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53 51">
                        <path d="M20.2 19.6h20.2v3.9H20.2zM20.2 27.5h20.2v3.9H20.2zM20.2 35.3h12.1v3.9H20.2z" />
                        <path d="M44.5 7.9h-4V4c0-2.2-1.8-3.9-4-3.9H8.1C5.9.1 4 1.8 4 4v35.2c0 2.2 1.8 3.9 4 3.9h4V47c0 2.2 1.8 3.9 4 3.9h28.3c2.2 0 4-1.7 4-3.9V11.8c.2-2.1-1.6-3.9-3.8-3.9zm-32.4 3.9v27.4h-4V4h28.3v3.9H16.2c-2.3 0-4.1 1.8-4.1 3.9zM44.5 47H16.2V11.8h28.3V47z" />
                    </svg>
                </div>
            </div>
            <div class="User__login-info__group">
                <label for="" class="Form__label">Password</label>
                <div class="flex flex-justify-between flex-align-center bg-c-b100 u-border-radius m-top-1 m-bottom-3 m-bottom-0__l">
                    <input id="" type="text" class="Input border-0 m-top-0 bg-c-b100" placeholder="Poopoo" disabled>
                    <svg title="Copy to clipboard" class="Icon Icon--size-2 m-x-1 t-c-b300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53 51">
                        <path d="M20.2 19.6h20.2v3.9H20.2zM20.2 27.5h20.2v3.9H20.2zM20.2 35.3h12.1v3.9H20.2z" />
                        <path d="M44.5 7.9h-4V4c0-2.2-1.8-3.9-4-3.9H8.1C5.9.1 4 1.8 4 4v35.2c0 2.2 1.8 3.9 4 3.9h4V47c0 2.2 1.8 3.9 4 3.9h28.3c2.2 0 4-1.7 4-3.9V11.8c.2-2.1-1.6-3.9-3.8-3.9zm-32.4 3.9v27.4h-4V4h28.3v3.9H16.2c-2.3 0-4.1 1.8-4.1 3.9zM44.5 47H16.2V11.8h28.3V47z" />
                    </svg>
                </div>
            </div>

            <div class="User__login-info__group m-top-3 m-top-0__l flex flex-column__l flex-justify-between">
                <label for="" class="Form__label m-bottom-3__l">Port</label>
                <span class="t-line-height-1">22</span>
            </div>

            <div class="User__login-info__group flex-shrink-0 m-top-2 m-top-0__l flex flex-column__l flex-align-center flex-align-start__l flex-justify-between">
                <label for="" class="Form__label m-bottom-3__l">SSH Protocol</label>
                <span class="Form__label t-line-height-1">On</span>
            </div>

            <div class="m-top-4 l-none__l flex-align-center">
                <button class="Button Button--dark Button--block p-x-3 m-top-3">Manage Files</button>
                <button class="Button Button--block m-top-2 js-edit-user">Edit User</button>
            </div>

        </div>
        <!-- end user details -->

        <div class="User__edit l-none p-2 p-3__m">

            
        <div class="row m-bottom-2">

            <div class="col-12 col-xl-4 m-bottom-3 m-bottom-0__l">

                <div class="Form__group">
                    <label for="input1" class="Form__label m-bottom-2">Edit The Full Name</label>
                    <input id="input1" type="text" class="Input" placeholder="Example placeholder content">
                </div>

                <div class="Form__group">
                    <label for="input1" class="Form__label">New Password</label>
                    <input id="input1" type="text" class="Input" placeholder="Example placeholder content">
                    <label class="Choice m-top-2">
                        <input type="checkbox" name="check1">
                        <span class="Choice__label">Generate Random Password</span>
                    </label>
                </div>

            </div>

            <div class="col-12 col-xl-4 offset-xl-1 m-bottom-6 m-bottom-0__l">
                <label class="Form__label m-bottom-2">Type of user account:</label>

                <form class="RadioButtonGroup">

                    <input type="radio" id="ftp-new-user4" name="RadioButtonGroup1" value="ftp" checked />
                    <label for="ftp-new-user4">
                        FTP
                    </label>

                    <input type="radio" id="sftp-new-user4" name="RadioButtonGroup1" value="sftp" />
                    <label for="sftp-new-user4">
                        SFTP
                    </label>

                    <input type="radio" id="ssh-new-user4" name="RadioButtonGroup1" value="ssh" />
                    <label for="ssh-new-user4">
                        Shell
                    </label>

                    <!-- RadioButtonGroup__Details -->
                    <div class="RadioButtonGroup__Details">
                        <div class="RadioButtonGroup__Details__Area">
                            FTP User — Allows login via FTP for file transfers only
                        </div>
                        <div class="RadioButtonGroup__Details__Area">
                            <p>SFTP User — Allows login via SFTP (SSH File Transfer) for file transfers only</p>
                            <div class="Form__group">
                                <label class="Choice">
                                    <input type="checkbox" name="check1" checked>
                                    <span class="Choice__label">Disallow FTP</span>
                                </label>
                            </div>
                        </div>
                        <div class="RadioButtonGroup__Details__Area">
                            <p><span class="t-bold">Shell User</span> — Allows login via SSH (secure shell) for command-line access, as well as SFTP.</p>
                            <div class="Form__group Form__group--select m-bottom-2">
                                <label for="select1" class="Form__label">Shell Type:</label>
                                <select id="select1" class="Select">
                                    <option>/bin/bash</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                    <option>Option 4</option>
                                    <option>Option 5</option>
                                </select>
                            </div>

                            <div class="Form__group">
                                <label class="Choice">
                                    <input type="checkbox" name="check1" checked>
                                    <span class="Choice__label">Disallow FTP</span>
                                </label>
                            </div>
                        </div>
                    </div>

                </form>

            </div>
            <!-- end .col-4 -->

            <div class="col-12 col-xl-3 m-bottom-4 m-bottom-0__l">

                <div class="Form__group l-flex flex-row flex-column__l flex-align-center flex-align-start__l flex-justify-between">
                    <label class="Form__label m-bottom-2__l m-right-0__l">SSH Protocol:</label>

                    <div class="Toggle">
                        <input class="Toggle__input" type="checkbox" id="UNIQUE-ID4">
                        <label for="UNIQUE-ID4" class="Toggle__label">
                            <span class="Toggle__visible"></span>
                        </label>
                    </div>
                </div>
                <div class="Form__group l-flex flex-row flex-column__l flex-align-center flex-align-start__l flex-justify-between">
                    <label class="Form__label m-bottom-2__l m-right-0__l">Enhanced Security:</label>

                    <div class="Toggle">
                        <input class="Toggle__input" type="checkbox" id="UNIQUE-ID5">
                        <label for="UNIQUE-ID5" class="Toggle__label">
                            <span class="Toggle__visible"></span>
                        </label>
                    </div>
                </div>
                <div class="Form__group l-flex flex-row flex-column__l flex-align-center flex-align-start__l flex-justify-between">
                    <label class="Form__label m-bottom-2__l m-right-0__l">CPU Reporting:</label>

                    <div class="Toggle">
                        <input class="Toggle__input" type="checkbox" id="UNIQUE-ID6">
                        <label for="UNIQUE-ID6" class="Toggle__label">
                            <span class="Toggle__visible"></span>
                        </label>
                    </div>
                </div>

            </div>

            </div>


            <div class="row">
                <div class="col-12 col-lg-4 t-center t-left__l">
                    <button class="js-edit-user-delete Button Button--danger l-block l-inline-block__l w-100 w-auto__l m-bottom-3 m-bottom-0__l">Delete This User</button>
                </div>
                <div class="col-12 col-lg-8 t-right">
                    <button class="js-edit-user-cancel Button l-block l-inline-block__m w-100 w-auto__m m-bottom-3 m-bottom-0__m">Cancel</button>
                    <button class="Button Button--primary l-block l-inline-block__m w-100 w-auto__m m-left-0 m-left-1__m">Save Changes</button>
                </div>
            </div>

        </div>

        <div class="User__delete bg-c-g100 l-none no-gutters flex-justify-between flex-align-center flex-align-end__l p-3 border-top border-c-g200 flex-column flex-row__l">
            <div class="col-xl-7">
                <h3 class="m-top-0 m-bottom-3 t-body t-bold">Do you want to delete this user?</h3>
                <p class="m-bottom-3 m-bottom-0__l">Deleting this user will cause all of its associated data and settings to be <strong>permanently</strong> deleted and you will not be able to recreate a user with the same name. Are you sure?</p>
            </div>
            <div class="col-xl-4 offset-lg-1 flex flex-justify-end flex-column flex-row__l">
                <button class="js-edit-user-delete-confirm Button Button--danger bg-c-r300 t-c-w100 p-x-3 m-right-2__l">Yes, delete user</button>
                <button class="js-edit-user-delete-cancel Button Button--dark bg-c-w100 t-c-g500 border-c-g200 m-left-0 m-top-3 m-top-0__l js-delete-mode-on-click">Cancel</button>
            </div>
        </div>

    </div>


</div>

<button class="Button--fixed-mobile l-none__l js-toggle-add-user">
	<svg class="Icon Icon--size-2" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve"><defs></defs><path d="M46.88,21.88H28.12V3.12C28.12,1.4,26.73,0,25,0h0c-1.73,0-3.12,1.4-3.12,3.12v18.75H3.12C1.4,21.88,0,23.27,0,25v0 c0,1.73,1.4,3.12,3.12,3.12h18.75v18.75c0,1.73,1.4,3.12,3.12,3.12h0c1.73,0,3.12-1.4,3.12-3.12V28.12h18.75	c1.73,0,3.12-1.4,3.12-3.12v0C50,23.27,48.6,21.88,46.88,21.88z"/></svg>
</button>
