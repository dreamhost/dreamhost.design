---
title: Users Bar
layout: page
---


<!-- 
<p>For interactivity, the JavaScript function targets a class of <code>.js-bar</code> at the root of the component. An element with the <code>.js-drawer-on-click</code> class is used to reveal any information within the <code>.Bar__drawer</code> element. <code>.js-edit-mode-on-click</code> will trigger the drawer with an edit ui. Additionally, an element with a class of <code>.js-delete-mode-on-click</code> will reveal a second drawer defined by the class <code>.Bar__delete</code></p>

<p>The component is also built to handle alerts. When a class of <code>.has-alert</code> is added to <code>.Bar</code> the alert message is revealed.</p> -->



<div class="User Bar">
  
  <div class="User__details p-2 p-3__m">
    <div class="Avatar User__details__avatar"><img src="https://placekitten.com/50/50" class="u-border-radius-circle l-block m-bottom-0"/></div>
    <div class="User__details__info l-flex flex-column flex-row__l flex-grow-1">
    <div class="User__details__description t-1 t-bold p-y-half t-truncate m-right-2__l">Ian's FTP Access</div>
    <div class="User__details__url t-1 p-y-half flex m-right-2__l"><span class="t-truncate l-inline-block">ianhernandez.com</span><span class="t-c-b300 m-left-1">+1</span></div>
    </div>
    <button class="js-show-login-details User__details__login-info flex-shrink-0 t-c-g300 flex__m flex-align-center__m p-0 bg-transparent border-0">
      <span class="l-none t-body t-1 t-c-g500 t-bold m-right-1 l-block__l">Login Info</span>
      <svg class="Icon Icon--size-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M443.5 162.6l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L224 351 28.5 155.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.7 4.8-12.3.1-17z"/></svg>
    </button>
    
    <div class="User__details__actions l-none flex-align-center__l">
      <button class="Button Button--dark">Manage Files</button>
      <button class="Button js-edit-user">Edit User</button>
		</div>
  </div>
  
  
  
  <div class="User__login-info l-none p-2 p-3__m p-top-0__l l-flex flex-align-center__l flex-column flex-row__l">
    <div class="User__login-info__group">
      <label for="" class="Form__label">Host Name</label>
      <div class="flex flex-justify-between flex-align-center bg-c-b100 u-border-radius m-top-1 m-bottom-3 m-bottom-0__l">
						<input id="" type="text" class="Input border-0 m-top-0 bg-c-b100" placeholder="Poopoo"
							disabled>
						<svg title="Copy to clipboard" class="Icon Icon--size-2 m-x-1 t-c-b300" xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 53 51">
							<path d="M20.2 19.6h20.2v3.9H20.2zM20.2 27.5h20.2v3.9H20.2zM20.2 35.3h12.1v3.9H20.2z" />
							<path
								d="M44.5 7.9h-4V4c0-2.2-1.8-3.9-4-3.9H8.1C5.9.1 4 1.8 4 4v35.2c0 2.2 1.8 3.9 4 3.9h4V47c0 2.2 1.8 3.9 4 3.9h28.3c2.2 0 4-1.7 4-3.9V11.8c.2-2.1-1.6-3.9-3.8-3.9zm-32.4 3.9v27.4h-4V4h28.3v3.9H16.2c-2.3 0-4.1 1.8-4.1 3.9zM44.5 47H16.2V11.8h28.3V47z" />
							</svg>
					</div>
    </div>
    <div class="User__login-info__group">
    <label for="" class="Form__label">Username</label>
    <div class="flex flex-justify-between flex-align-center bg-c-b100 u-border-radius m-top-1 m-bottom-3 m-bottom-0__l">
						<input id="" type="text" class="Input border-0 m-top-0 bg-c-b100" placeholder="Poopoo"
							disabled>
						<svg title="Copy to clipboard" class="Icon Icon--size-2 m-x-1 t-c-b300" xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 53 51">
							<path d="M20.2 19.6h20.2v3.9H20.2zM20.2 27.5h20.2v3.9H20.2zM20.2 35.3h12.1v3.9H20.2z" />
							<path
								d="M44.5 7.9h-4V4c0-2.2-1.8-3.9-4-3.9H8.1C5.9.1 4 1.8 4 4v35.2c0 2.2 1.8 3.9 4 3.9h4V47c0 2.2 1.8 3.9 4 3.9h28.3c2.2 0 4-1.7 4-3.9V11.8c.2-2.1-1.6-3.9-3.8-3.9zm-32.4 3.9v27.4h-4V4h28.3v3.9H16.2c-2.3 0-4.1 1.8-4.1 3.9zM44.5 47H16.2V11.8h28.3V47z" />
							</svg>
					</div>
    </div>
    <div class="User__login-info__group">
    <label for="" class="Form__label">Password</label>
    <div class="flex flex-justify-between flex-align-center bg-c-b100 u-border-radius m-top-1 m-bottom-3 m-bottom-0__l">
      <input id="" type="text" class="Input border-0 m-top-0 bg-c-b100" placeholder="Poopoo"
             disabled>
      <svg title="Copy to clipboard" class="Icon Icon--size-2 m-x-1 t-c-b300" xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 53 51">
        <path d="M20.2 19.6h20.2v3.9H20.2zM20.2 27.5h20.2v3.9H20.2zM20.2 35.3h12.1v3.9H20.2z" />
        <path
              d="M44.5 7.9h-4V4c0-2.2-1.8-3.9-4-3.9H8.1C5.9.1 4 1.8 4 4v35.2c0 2.2 1.8 3.9 4 3.9h4V47c0 2.2 1.8 3.9 4 3.9h28.3c2.2 0 4-1.7 4-3.9V11.8c.2-2.1-1.6-3.9-3.8-3.9zm-32.4 3.9v27.4h-4V4h28.3v3.9H16.2c-2.3 0-4.1 1.8-4.1 3.9zM44.5 47H16.2V11.8h28.3V47z" />
      </svg>
    </div>
    </div>
    
    
    <div class="User__login-info__group m-top-3 m-top-0__l flex flex-column__l flex-justify-between">
      <label for="" class="Form__label m-bottom-3__l">Port</label>
      <span class="t-line-height-1">22</span>
    </div>
    
    <div
         class="User__login-info__group flex-shrink-0 m-top-2 m-top-0__l flex flex-column__l flex-align-center flex-align-start__l flex-justify-between">
      <label for="" class="Form__label m-bottom-3__l">SSH Protocol</label>
      <span class="Form__label t-line-height-1">On</span>
    </div>
    
    <div class="m-top-4 l-none__l flex-align-center">
      <button class="Button Button--dark Button--block p-x-3 m-top-3">Manage Files</button>
      <button class="Button Button--block m-top-2 js-edit-user">Edit User</button>
		</div>
    
  </div> <!-- end user details -->
  
  <div class="User__edit l-none p-2 p-3__m p-top-0__l">
    
    <div class="row">
      
      <div class="col-12 col-xl-4">
        
        <div class="Form__group">
          <label for="input1" class="Form__label">Edit The Full Name</label>
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
      
      <div class="col-12 col-xl-4 offset-xl-1">
        <label class="Form__label m-bottom-1">Text label</label>
        <section class="Tabs Tabs--button m-bottom-3">
          <ul class="Tabs__nav l-flex">
            <li class="Tabs__nav-item flex-grow-1">FTP</li>
            <li class="Tabs__nav-item flex-grow-1">SFTP</li>
            <li class="Tabs__nav-item flex-grow-1 is-active" data-tab="Shell">Shell</li>
          </ul>
          <div class="Tab" data-tab="Shell">
            TAB CONTENT GOES HERE
          </div>

        </section>
        
        <!-- start tab content -->
        
        <p>Shell User — allows login via ssh lorem ipsum dolom sit amet non consectur</p>

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
      <!-- end tab content -->
        
      </div> <!-- end .col-4 -->
       
      <div class="col-12 col-xl-2 offset-xl-1">
        
        <div class="Form__group">
          <label class="Form__label m-bottom-1">SSH Protocol:</label>
          
          <div class="Toggle">
						<input class="Toggle__input" type="checkbox" id="UNIQUE-ID" />
						<label for="UNIQUE-ID" class="Toggle__label">
							<span class="Toggle__visible"></span>
						</label>
					</div>
          
        </div>
        <div class="Form__group">
          <label class="Form__label m-bottom-1">Enhanced Security:</label>

          <div class="Toggle">
            <input class="Toggle__input" type="checkbox" id="UNIQUE-ID" />
            <label for="UNIQUE-ID" class="Toggle__label">
              <span class="Toggle__visible"></span>
            </label>
          </div>

        </div>
        <div class="Form__group">
          <label class="Form__label m-bottom-1">CPU Reporting:</label>

          <div class="Toggle">
            <input class="Toggle__input" type="checkbox" id="UNIQUE-ID" />
            <label for="UNIQUE-ID" class="Toggle__label">
              <span class="Toggle__visible"></span>
            </label>
          </div>

        </div>

      </div>
      
    </div>
    
    <div class="row">
      <div class="col-12 col-md-4">
        <button class="js-edit-user-delete Button Button--danger l-block l-inline-block__m w-100 w-auto__m m-bottom-3 m-bottom-0__l">Delete This User</button>
      </div>
      <div class="col-12 col-md-8 t-right">
        <button class="js-edit-user Button l-block l-inline-block__m w-100 w-auto__m m-bottom-3 m-bottom-0__m">Cancel</button>
        <button class="Button Button--primary l-block l-inline-block__m w-100 w-auto__m m-left-0 m-left-1__m">Save Changes</button>
      </div>
    </div>
    
  </div>
  
	<div class="User__delete bg-c-g100 l-none no-gutters flex-justify-between flex-align-center flex-align-end__l p-3 border-top border-c-g200 flex-column flex-row__l">
			<div class="col-xl-7">
				<h3 class="m-top-0 m-bottom-3 t-body t-bold">Do you want to delete this user?</h3>
				<p class="m-bottom-3 m-bottom-0__l">Deleting this user will cause all of its associated data and settings to
					be <strong>permanently</strong> deleted and you will not be able to recreate a user with the same name.
					Are you sure?</p>
			</div>
			<div class="col-xl-4 offset-lg-1 flex flex-justify-end flex-column flex-row__l">
				<button class="Button Button--danger bg-c-r300 t-c-w100 p-x-3 m-right-2__l">Yes, delete user</button>
				<button
					class="js-edit-user-delete Button Button--dark bg-c-w100 t-c-g500 border-c-g200 m-left-0 m-top-3 m-top-0__l js-delete-mode-on-click">Cancel</button>
			</div>
		</div>

</div>
