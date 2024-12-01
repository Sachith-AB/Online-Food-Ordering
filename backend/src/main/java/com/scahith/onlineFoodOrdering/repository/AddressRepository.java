package com.scahith.onlineFoodOrdering.repository;

import com.scahith.onlineFoodOrdering.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address, Long> {
}
