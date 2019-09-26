const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">
    
    <div>Author Name</div> 
    <div><input id="authorName" name="Author Name" type="text" size = "20"/>
  </div>
    
  <div>Author E-Mail</div>
  <div><input id="authorEmail" name="authorEMail" type="text" size = "20"/>
</div>
    <div class="form-group">
     <div> <label for="title" size ="40">Page Title</label></div>
      
        <input id="title" name="title" type="text" size = "40"/>
      </div>

    <div>Page Content</div>
    <textarea id="pageContent" name="pageContent" type="text" cols ="40" rows="5"></textarea>
 
    <div>Page Status</div>
  <div><input id="pageStatus" name="pageStatus" type="text" size = "20"/>
</div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>
  
  </form>
`);