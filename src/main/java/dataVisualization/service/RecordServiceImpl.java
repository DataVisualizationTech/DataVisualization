/**  
 * Project Name:BookRecSystem  
 * File Name:AuthorServiceImpl.java  
 * Package Name:cn.zju.springboot.service.impl  
 * Date:2017年12月10日下午9:36:02  
 * Copyright (c) 2017, chenzhou1025@126.com All Rights Reserved.  
 *  
*/  
  
package dataVisualization.service;

import com.github.abel533.entity.Example;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import dataVisualization.mapper.RecordMapper;
import dataVisualization.pojo.Record;

import java.util.List;

/**  
 * ClassName:AuthorServiceImpl <br/>  
 * Function: TODO ADD FUNCTION. <br/>  
 * Reason:   TODO ADD REASON. <br/>  
 * Date:     2017年12月10日 下午9:36:02 <br/>  
 * @author   john-lin  
 * @version    
 * @since    JDK 1.6  
 * @see        
 */
@Service
public class RecordServiceImpl implements RecordService {

	@Autowired
	private RecordMapper recordMapper;


	@Override
	public List<Record> getRecordsByCode(String code) {
		Example example = new Example(Record.class);
		Example.Criteria criteria = example.createCriteria();
		criteria.andEqualTo("code", code);
		List<Record> result = recordMapper.selectByExample(example);

//		result=result.subList(0,800);
		return result;
	}



    @Override
    public List<Record> getRecords(String gpstime) {
        // TODO Auto-generated method stub
        Example example = new Example(Record.class);
        Example.Criteria criteria = example.createCriteria();
        //criteria.andEqualTo("gpstime", gpstime);
        criteria.andLike("gpstime",gpstime);
        List<Record> result = recordMapper.selectByExample(example);
        return result;
    }

//    @Override
//    public List<Record> getTop50RecordsByCode(String code) {
//        Example example = new Example(Record.class);
//        Example.Criteria criteria = example.createCriteria();
//        criteria.andEqualTo("code", code);
//        List<Record> result = recordMapper.selectByExample(example);
//
////		result=result.subList(0,800);
//        return result;
//    }
}
  
