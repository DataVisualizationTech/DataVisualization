package dataVisualization.controller;


import dataVisualization.pojo.Record;
import dataVisualization.service.RecordService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@Controller
public class RouteController {
    @Autowired
    private RecordService recordService;

    @RequestMapping("/getJson")
    @ResponseBody
    public List<Record> json(HttpServletRequest request){
        String code = request.getParameter("code");
        System.out.println(code);
        List<Record> list = new ArrayList<>();
        list=recordService.getRecordsByCode(code).subList(0,100);
         return list;
        //            list=recordService.getRouteByCode();
//        list.add(new Route(123,"江西","115.9723760000","28.6935300000"));
//        list.add(new Route(1234,"杭州","120.5984030000","30.2381650000"));
//        list.add(new Route(12345,"山东","117.0859000000","36.1389100000"));
//        list.add(new Route(12346,"金华","120.0993600000","29.3528800000"));
//        list.add(new Route(12347,"广东","110.1008160000","21.3722930000"));
//        list.add(new Route(12348,"嘉兴","120.3905680000","30.4794010000"));
//        return list;
//        list.add(new Route(123,"江西省南昌市青山湖区;金庐南路,金庐南路-高新七路交叉路口;","115.9723760000","28.6935300000"));
//        list.add(new Route(1234,"浙江省宁波市鄞州区;四安路,五乡西路-金腾路交叉路口;安兴桥,四安文化乐园,卓家滩附近","120.5984030000","30.2381650000"));
//        list.add(new Route(12345,"浙江省宁波市鄞州区;四安路,五乡西路-金腾路交叉路口;安兴桥,四安文化乐园,卓家滩附近","117.0859000000","36.1389100000"));
//        list.add(new Route(12346,"江西省南昌市青山湖区;金庐南路,金庐南路-高新七路交叉路口;","120.0993600000","29.3528800000"));
//        list.add(new Route(12347,"浙江省宁波市鄞州区;五乡西路,五乡西路-金腾路交叉路口;安兴桥,亚峰百货商场,日兴公园附近","110.1008160000","21.3722930000"));
//        list.add(new Route(12348,"浙江省宁波市鄞州区;四安路,五乡西路-金腾路交叉路口;安兴桥,四安文化乐园,卓家滩附近","120.3905680000","30.4794010000"));

//        list.add(new Route("115.9723760000","28.6935300000"));
//        list.add(new Route("120.5984030000","30.2381650000"));
//        list.add(new Route("117.0859000000","36.1389100000"));
//        list.add(new Route("120.0993600000","29.3528800000"));
//        list.add(new Route("110.1008160000","21.3722930000"));
//        list.add(new Route("120.3905680000","30.4794010000"));
//        return list;
    }
}
