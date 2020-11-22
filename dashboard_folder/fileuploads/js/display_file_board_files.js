
$(document).ready(function(){

      //checking for logins
      var username = sessionStorage.getItem("username");
      var name = sessionStorage.getItem("name");
      var status = sessionStorage.getItem("username");
      if(!(username && name && status)){
        window.location.href = "./../files.html";
      }else {

        $("body").css("display","block")
        $("#admin_username").text(username);
        $(".admin_name").text( name.charAt(0).toUpperCase() + name.slice(1) );
      }
      //log out
      $(".fa-sign-out").click(function(e) {
        e.preventDefault();
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("status");
        window.location.href = "./../files.html";
      });


      //  show file
      $.getJSON('./fileuploads/get_file_names.php').then(function (files) {
        console.log(files);
        $.each(files, function(i,name){
          display_file(name);
        });

      });

    function display_file(file) {
      if (file.length < 9) {
        console.log('fiem fel: ', file.length, file);
        // .css("padding","25px");
      }
      var extension = file.substr( (file.lastIndexOf('.') +1) );
      switch(extension) {
        case 'jpg':
        case 'JPG':
        case 'jpeg':
        case 'JPEG':
        case 'png':
        case 'gif':
            console.log("photo");
            var link = `
                        <div class = "file_container">
                          <div class = "file_type_icon">
                            <i class="fa fa-file-image-o"></i>
                          </div>
                          <div>
                            <span><input type="checkbox" class = "checkbox" id=" ` + file + `" name="` + file + `" value="` + file + `"></span>
                            <a href="./fileuploads/uploads/`+ file + `" class = "file" target = "_blank" download = "` + file + `" >`+ file +  `
                            <span><i class="fa fa-download" aria-hidden="true"></i></span>
                            </a>

                          </div>
                        </div>
                        `
            $(".file_display").append(link);
        break;
        case 'zip':
        case 'rar':
            console.log("archive files");
            var link = `
                      <div class = "file_container">
                        <div class = "file_type_icon">
                          <i class="fa fa-file-archive-o"></i>
                        </div>
                        <div>
                          <span><input type="checkbox" class = "checkbox" id=" ` + file + `" name="` + file + `" value="` + file + `"></span>
                          <a href="./fileuploads/uploads/`+ file + `" class = "file" target = "_blank" download = "` + file + `" >`+ file +  `
                          <span><i class="fa fa-download" aria-hidden="true"></i></span>
                          </a>
                        </div>
                      </div>
                        `
            $(".file_display").append(link);
        break;
        case 'pdf':
        case 'PDF':
            console.log('was pdf');
            var link = `
                        <div class = "file_container">
                          <div class = "file_type_icon">
                            <i class="fa fa-file-pdf-o"></i>
                          </div>
                          <div>
                            <span><input type="checkbox" class = "checkbox" id=" ` + file + `" name="` + file + `" value="` + file + `"></span>
                            <a href="./fileuploads/uploads/`+ file + `" class = "file" target = "_blank" download = "` + file + `" >`+ file +  `
                            <span><i class="fa fa-download" aria-hidden="true"></i></span>
                            </a>
                          </div>
                        </div>

                        `
            $(".file_display").append(link);
        break;
        case 'doc':
        case 'docs':
        case 'docx':
            console.log('doc');
            var link = `
                        <div class = "file_container">
                          <div class = "file_type_icon">
                            <i class="fa fa-file-word-o"></i>
                          </div>
                          <div>
                            <span><input type="checkbox" class = "checkbox" id=" ` + file + `" name="` + file + `" value="` + file + `"></span>
                            <a href="./fileuploads/uploads/`+ file + `" class = "file" target = "_blank" download = "` + file + `" >`+ file +  `
                            <span><i class="fa fa-download" aria-hidden="true"></i></span>
                            </a>
                          </div>
                        </div>

                        `
            $(".file_display").append(link);
          break;
        case 'xls':
        case 'xlsx':
            console.log('xls');
            var link = `
                        <div class = "file_container">
                          <div class = "file_type_icon">
                            <i class="fa fa-file-excel-o"></i>
                          </div>
                          <div>
                            <span><input type="checkbox" class = "checkbox" id=" ` + file + `" name="` + file + `" value="` + file + `"></span>
                            <a href="./fileuploads/uploads/`+ file + `" class = "file" target = "_blank" download = "` + file + `" >`+ file +  `
                            <span><i class="fa fa-download" aria-hidden="true"></i></span>
                            </a>
                          </div>
                        </div>

                        `
            $(".file_display").append(link);
          break;
        case 'ppt':
            console.log("ppt");
            var link = `
                        <div class = "file_container">
                          <div class = "file_type_icon">
                            <i class="fa fa-file-powerpoint-o"></i>
                          </div>
                          <div>
                            <span><input type="checkbox" class = "checkbox" id=" ` + file + `" name="` + file + `" value="` + file + `"></span>

                            <a href="./fileuploads/uploads/`+ file + `" class = "file" target = "_blank" download = "` + file + `" >`+ file +  `
                            <span><i class="fa fa-download" aria-hidden="true"></i></span>
                            </a>
                          </div>
                        </div>

                        `
            $(".file_display").append(link);
          break;
        case 'odt':
        default:
            console.log('other files');
            var link = `
                        <div class = "file_container">
                          <div class = "file_type_icon">
                            <i class="fa fa-file-o"></i>
                          </div>
                          <div>
                            <span><input type="checkbox" class = "checkbox" id=" ` + file + `" name="` + file + `" value="` + file + `"></span>

                            <a href="./fileuploads/uploads/`+ file + `" class = "file" target = "_blank" download = "` + file + `" >`+ file +  `
                            <span><i class="fa fa-download" aria-hidden="true"></i></span>
                            </a>
                          </div>
                        </div>

                        `
            $(".file_display").append(link);
      }
    };

      //select file
      $(".select_file").click(function(){
        console.log("checkbox display");
        $(".checkbox").css("display", "inline-block");
      });
      $(".rename_file").click(function(){
        var checked_files = $('.checkbox:checkbox:checked');
        if(((checked_files.length) == 1)){
          console.log("rename fils");
          var fileName = $('.checkbox:checkbox:checked')[0].name;
          var extension = fileName.substr( (fileName.lastIndexOf('.') +1) );
          $('#new_file_name').val("." + extension)// = extension;
          $(".file_rename_input_section").css("display", "flex");

        }else {
          $('#file_action_message').html('<p style="color:#28A74B; margin-left: 20px; ">Please select one file</p>');
            setTimeout(function () {
              window.location.reload();
            }, 2500);
          }
        });

      //rename file
      $("#rename_submit_button").click(function(e) {
        var fileName = $('.checkbox:checkbox:checked')[0].name;
        var newFileName = $('#new_file_name').val();
        console.log(fileName, newFileName);

        $.ajax({
          type: 'POST',
          url: './fileuploads/rename_file.php',
          data: {fileName:fileName, newFileName:newFileName},
          error:function(error){
            console.log("error in renaming file");
            console.log(error);
          },
          success: function(result){
              console.log("result:" + result);
              if(result == "true"){
                console.log(result);
                console.log("renamed");
                $('#file_action_message').html('<p style="color:#28A74B; margin-left: 20px; ">File renamed successfully!</p>');
                setTimeout(function () {
                window.location.reload();
                }, 2500);
              }else {
                console.log(result);
                console.log("some error happen in renaming");
              }
          }
        });
      })
      // $('#checkbox').is(':checked'); checking if any file get selected
      // var $boxes = $('input[name=thename]:checked');
      // $boxes.each(function(){
      //   // for multifile actions
      // });
      // function delete for delete file
      $('.delete_file').click(function(e) {
        e.preventDefault();
        var checked_files = $('.checkbox:checkbox:checked');
        console.log(checked_files);
        if(((checked_files.length) >= 1)){
          console.log("delete file clicked");
          var file_index = 0;
          for (var i = 0; i < checked_files.length; i++) {
            if($('.checkbox:checkbox:checked')[i].name){
              //deletion begin
              var filename = $('.checkbox:checkbox:checked')[i].name;
              // filename.append("checkbox",)
              console.log(filename);
              $.ajax({
                type: 'POST',
              url: './fileuploads/delete_file.php',
              data: {filename:filename},
              error:function(error){
                console.log("error in deleting file" + i);
                console.log(error);
              },
              success: function(result){
                  console.log("result:" + result + i);
                  if(result == "true"){
                    console.log(result );
                    console.log("deleted " + i);
                    $('#file_action_message').html('<p style="color:#28A74B; margin-left: 20px; ">File deleted successfully!</p>');
        						setTimeout(function () {
                    window.location.reload();
                    }, 2500);
                  }else {
                    console.log(result);
                    console.log("some error happen" + i);
                  }
              }
            });

            //deletion end
          }
          }

        }else {
          $('#file_action_message').html('<p style="color:#28A74B; margin-left: 20px; ">Please select one file</p>');
          setTimeout(function () {
          window.location.reload();
          }, 2500);
        }


      });

});
