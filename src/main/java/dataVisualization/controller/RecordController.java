/**  
 * Project Name:BookRecSystem  
 * File Name:AuthorController.java  
 * Package Name:cn.zju.springboot.controller  
 * Date:2017年12月12日下午7:11:16  
 * Copyright (c) 2017, chenzhou1025@126.com All Rights Reserved.  
 *  
*/  
  
package dataVisualization.controller;

import dataVisualization.pojo.Record;
import net.sf.json.JSON;
import net.sf.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import dataVisualization.service.RecordService;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;
import net.sf.json.JSONObject;


/**
 * ClassName:AuthorController <br/>
 * Function: TODO ADD FUNCTION. <br/>
 * Reason:   TODO ADD REASON. <br/>
 * Date:     2017年12月12日 下午7:11:16 <br/>
 * @author   john-lin
 * @version
 * @since    JDK 1.6
 * @see
 */
@Controller
@RequestMapping("record")
public class RecordController {

	@Autowired
	private RecordService recordService;

	@RequestMapping("/getRecordsByCode")
	//ResponsebBody表示返回的是Json
	@ResponseBody
	public Object getRecordsByCode(HttpServletRequest request) {
		String code = request.getParameter("code");
		List<Record> records = new ArrayList<Record>();
		//从service获取records
		records = recordService.getRecordsByCode(code);

		//将格式转换
		JSONObject coordinates = new JSONObject();
		JSONArray sequences = new JSONArray();
		int length = records.size();
		for (int i = 0; i < length; i++) {
			Record record = records.get(i);
			double lat = Double.parseDouble(record.getLat());
			double lng = Double.parseDouble(record.getLng());
			//这是该对象的一个属性
			double[] coordinate = {lng, lat};
			if(i < length - 1){
				JSONObject name1 = new JSONObject();
				JSONObject name2 = new JSONObject();
				name1.put("name", "p"+ (i+1) );
				name2.put("name", "p"+ (i+2) );
				JSONArray sequence = new JSONArray();
				sequence.add(name1);
				sequence.add(name2);
				sequences.add(sequence);
			}
			coordinates.put("p" + (i+1), coordinate);
		}

		JSONObject result = new JSONObject();
		result.put("coordinates", coordinates);
		result.put("sequences", sequences);

		return result;
	}

	@RequestMapping("/test")
	//ResponsebBody表示返回的是Json
	@ResponseBody
	public String getRecordsByCode(){
		return "test";
	}
}

class Name{
	public String name;

	public Name(String name) {
		this.name = name;
	}
}
  
