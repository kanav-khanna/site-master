
$(document).ready(function(){

      //checking for logins
      var username = sessionStorage.getItem("username");
      var name = sessionStorage.getItem("name");
      var status = sessionStorage.getItem("username");
      var admin = sessionStorage.getItem("admin");
      if(!(username && name && status && admin)){
        window.location.href = "./../html/admin_dashboard.html";
      }else {

        $("body").css("display","block")
        $("#admin_username").text(username);
        $(".admin_name").text( name.charAt(0).toUpperCase() + name.slice(1) );
      }

      //display file adding section
      $(".add_file").click(function(e) {
          e.preventDefault();
          $(".operation").css("display","none");
          $(".file_upload_iframe").css("display", "block");
      });

      //log out
      $(".fa-sign-out").click(function(e) {
        e.preventDefault();
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("status");
        window.location.href = "./../html/admin_dashboard.html";
      });

      //search files active_operation
      $('.file_search_form').submit(function(e){
        e.preventDefault();
        console.log("search file clicked");
        $(".file_display_container").css("display","none");
        var search_value = $(".search_files").val();
        console.log(search_value + "entered filename");

        $.getJSON('./fileuploads/get_file_names.php').then(function (files) {
          console.log(files);
          $.each(files, function(i,name){
            if (name == search_value) {
               display_file(name);
              console.log("yes file exist" + i);
            }else {
              console.log("file not found" + i);
            }

          });
        });

      });

      // // only image file search
      // $('.active_operation').click(function(e){
      //   e.preventDefault();
      //   console.log("search image only file clicked");
      //   $(".file_display_container").css("display","none");
      //   var search_value = $(".search_files").val();
      //   console.log(search_value + "entered filename");
      //
      //   $.getJSON('./fileuploads/get_file_names.php').then(function (files) {
      //     console.log(files);
      //     var namej= "";
      //     $.each(files, function(i,name){
      //       var extension = name.split(".")
      //       if (img_types.includes(extension[extension.length - 1]);) {
      //          display_file(name);
      //         console.log("yes file exist" + i);
      //       }else {
      //         console.log("file not found" + i);
      //       }
      //
      //     });
      //   });
      //
      // });
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
                        <div class = "file_container file_display_container">
                          <div class = "file_operations">
                          <i class="fa fa-ellipsis-v" aria-hidden="true" style="color: #9c9696;"></i>
                          </div>
                          <div class = "file_type_icon">
                            <i class="fa fa-file-image-o"></i>
                          </div>
                          <div class = "file_info">
                            <span><input type="checkbox" class = "checkbox" id=" ` + file + `" name="` + file + `" value="` + file + `"></span>
                            <a href="./fileuploads/uploads/`+ file + `" class = "file" target = "_blank" download = "` + file + `" >
                              <p class = "file_name">
                                `+ file +  `
                                <!--<span><i class="fa fa-download" aria-hidden="true"></i></span>-->
                              </p>
                            </a>
                            <p class = "file_size_` + file+`">Image file</p>
                          </div>
                        </div>
                        `
                        //<p class = "file_size_` + file+`">file_size_` +file+` </p>

            $(".file_display").append(link);
        break;
        case 'zip':
        case 'rar':
            console.log("archive files");
            var link = `
                      <div class = "file_container file_display_container">
                        <div class = "file_operations">
                        <i class="fa fa-ellipsis-v" aria-hidden="true" style="color: #9c9696;"></i>
                        </div>
                        <div class = "file_type_icon">
                          <i class="fa fa-file-archive-o"></i>
                        </div>
                        <div class = "file_info">
                          <span><input type="checkbox" class = "checkbox" id=" ` + file + `" name="` + file + `" value="` + file + `"></span>
                          <a href="./fileuploads/uploads/`+ file + `" class = "file" target = "_blank" download = "` + file + `" >
                            <p class = "file_name">
                              `+ file +  `
                            </p>
                          </a>
                          <p class = "file_size_` + file+`">Zip file</p>
                        </div>
                      </div>
                        `
            $(".file_display").append(link);
        break;
        case 'pdf':
        case 'PDF':
            console.log('was pdf');
            var link = `
                        <div class = "file_container file_display_container">
                          <div class = "file_operations">
                          <i class="fa fa-ellipsis-v" aria-hidden="true" style="color: #9c9696;"></i>
                          </div>
                          <div class = "file_type_icon">
                            <i class="fa fa-file-pdf-o"></i>
                          </div>
                          <div class = "file_info">
                            <span><input type="checkbox" class = "checkbox" id=" ` + file + `" name="` + file + `" value="` + file + `"></span>
                            <a href="./fileuploads/uploads/`+ file + `" class = "file" target = "_blank" download = "` + file + `" >
                              <p class = "file_name">
                                `+ file +  `
                              </p>
                            </a>
                            <p class = "file_size_` + file+`">PDF file</p>
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
                        <div class = "file_container file_display_container ">
                          <div class = "file_operations">
                          <i class="fa fa-ellipsis-v" aria-hidden="true" style="color: #9c9696;"></i>
                          </div>
                          <div class = "file_type_icon">
                            <i class="fa fa-file-word-o"></i>
                          </div>
                          <div class = "file_info">
                            <span><input type="checkbox" class = "checkbox" id=" ` + file + `" name="` + file + `" value="` + file + `"></span>
                            <a href="./fileuploads/uploads/`+ file + `" class = "file" target = "_blank" download = "` + file + `" >
                              <p class = "file_name">
                                `+ file +  `
                              </p>
                            </a>
                            <p class = "file_size_` + file+`"> DOC file</p>
                          </div>
                        </div>

                        `
            $(".file_display").append(link);
          break;
        case 'xls':
        case 'xlsx':
            console.log('xls');
            var link = `
                        <div class = "file_container file_display_container">
                          <div class = "file_operations">
                          <i class="fa fa-ellipsis-v" aria-hidden="true" style="color: #9c9696;"></i>
                          </div>
                          <div class = "file_type_icon">
                            <i class="fa fa-file-excel-o"></i>
                          </div>
                          <div class = "file_info">
                            <span><input type="checkbox" class = "checkbox" id=" ` + file + `" name="` + file + `" value="` + file + `"></span>
                            <a href="./fileuploads/uploads/`+ file + `" class = "file" target = "_blank" download = "` + file + `" >
                              <p class = "file_name">
                                `+ file +  `
                              </p>
                            </a>
                            <p class = "file_size_` + file+`">XLS file </p>
                          </div>
                        </div>

                        `
            $(".file_display").append(link);
          break;
        case 'ppt':
            console.log("ppt");
            var link = `
                        <div class = "file_container file_display_container">
                          <div class = "file_operations">
                          <i class="fa fa-ellipsis-v" aria-hidden="true" style="color: #9c9696;"></i>
                          </div>
                          <div class = "file_type_icon">
                            <i class="fa fa-file-powerpoint-o"></i>
                          </div>
                          <div class = "file_info">
                            <span><input type="checkbox" class = "checkbox" id=" ` + file + `" name="` + file + `" value="` + file + `"></span>

                            <a href="./fileuploads/uploads/`+ file + `" class = "file" target = "_blank" download = "` + file + `" >
                              <p class = "file_name">
                                `+ file +  `
                              </p>
                            </a>
                            <p class = "file_size_` + file+`">PPT file </p>
                          </div>
                        </div>

                        `
            $(".file_display").append(link);
          break;
        case 'odt':
        default:
            console.log('other files');
            var link = `
                        <div class = "file_container file_display_container">
                          <div class = "file_operations">
                          <i class="fa fa-ellipsis-v" aria-hidden="true" style="color: #9c9696;"></i>
                          </div>
                          <div class = "file_type_icon">
                            <i class="fa fa-file-o"></i>
                          </div>
                          <div class = "file_info">
                            <span><input type="checkbox" class = "checkbox" id=" ` + file + `" name="` + file + `" value="` + file + `"></span>

                            <a href="./fileuploads/uploads/`+ file + `" class = "file" target = "_blank" download = "` + file + `" >
                              <p class = "file_name">
                                `+ file +  `
                              </p>
                            </a>
                            <p class = "file_size_` + file+`">ODT file </p>
                          </div>
                        </div>

                        `
            $(".file_display").append(link);
      }
    };

      //select file
      $(".select_file").click(function(){
        $(".checkbox").css("display", "inline-block");
        $(".file_container").css("height", "47%");
        // $(".file_info").css("display", "unset");
        $(".checkbox").css("margin-left", "5%");
      });
      $(".rename_file").click(function(){
        var checked_files = $('.checkbox:checkbox:checked');
        if(((checked_files.length) == 1)){
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
          $('#file_action_message').html('<p style="color:#28A74B; margin-left: 20px; ">Please select at least one file</p>');
          setTimeout(function () {
          window.location.reload();
          }, 2500);
        }
      });

      //add active status on file operation
      $(".active_operation").click(function(){
        $(".active_operation").removeClass("active_operation_style");
        // $(".file_marker_span").css("display", "none");
        $(this).addClass("active_operation_style");
        $(this).css("display", "block");
      });

});
