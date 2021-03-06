package dataVisualization.mapper;

import com.github.abel533.mapper.Mapper;
import dataVisualization.pojo.Record;
import org.apache.ibatis.annotations.Param;
import org.springframework.cache.annotation.CacheConfig;

import java.util.List;


@CacheConfig(cacheNames = "books")
public interface RecordMapper extends Mapper<Record>{
    List<Record> getRecordsByCode(@Param("code") String code);
}
