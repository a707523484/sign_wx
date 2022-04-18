package com.example.signin_wx.Controller;

import com.example.signin_wx.Service.UserService;
import com.example.signin_wx.entity.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@RestController
public class SignController {

    @Resource
    private UserService userService;

    @RequestMapping("/getAllTeacher")
    public List<Teacher> getAllTeacher(){
        return userService.selectAllTeacher();
    }

    @RequestMapping("/getUserByLogin")
    public List<User> getUserByLogin(String uname,String upassword){
        return userService.getUserByLogin(uname,upassword);
    }

    @RequestMapping("/getClassByTeacher")
    public List<Classwx> getClassByTeacher(String uteacher){
        return userService.getClassByTeacher(uteacher);
    }

    @RequestMapping("/getClassByStudentName")
    public List<Student> getClassByStudentName(String studentName){
        return userService.getClassByStudentName(studentName);
    }

    @RequestMapping("/getClassByClassName")
    public List<Classwx> getClassByClassName(String className){
        return userService.getClassByClassName(className);
    }

    @RequestMapping("/addTask")
    public void addTask(Task task){
        userService.addTask(task);
    }

    @RequestMapping("/getTaskByCreator")
    public List<Task> getTaskByCreator(String creator,String taskClass){
        return userService.getTaskByCreator(creator,taskClass);
    }

    @RequestMapping("/addRecord")
    public void addRecord(Record record){
        userService.addRecord(record);
    }

    @RequestMapping("/getRecord")
    public List<Record> getRecord(String recordClass,String recordTeacher,String recordAddress){
        return userService.getRecord(recordClass,recordTeacher,recordAddress);
    }
}
