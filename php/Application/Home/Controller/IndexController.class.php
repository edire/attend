<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends BaseController {
    public function sign(){
        $type = session('user.usertype');
        $spacial = session('user.special');
        if ($spacial == 1) {
            $this->display('Sign/selectType');
            exit();
        }
        if($type == 1) {
            header('Location: /?c=Sign&a=signStart');
        } else {
            header('Location: /?c=Call&a=callBegin');
        }
    }
    public function my () {
        $userId = session('user.id');
        $userType = session('user.usertype');
        if ($userType == 1) {
            $userDetail = D('Student') -> getStudentById($userId);
        }else{
            $userDetail = D('Teacher') -> getTeacherById($userId);
            $userDetail['lead'] ? $userDetail['job'] = '班主任' : $userDetail['job'] = '代课老师';
        }
        $this -> userDetail = $userDetail;
        $this -> display();
    }

    public function leave()
    {
        $type = session('user.usertype');

        if($type == 1) {
            header('Location: /?c=Leave&a=leaveBegin');
        } else {
            header('Location: /?c=Leave&a=teacherList');
        }
        
    }
}