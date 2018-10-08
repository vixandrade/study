class VixArray < Array

  def bubble_sort
    loop do
      swapped = false

      (size-1).times do |i|
        puts "#{self}"

        if self[i] > self[i + 1]
          self[i], self[i + 1] = self[i + 1], self[i]
          swapped = true
        end

      end
      
      break if not swapped
    end

    self
  end

  def quicksort
    if self.empty?
      return []
    end

    puts "------------------------------"
    puts "self: #{self}"

    pivot = self.delete_at(rand(size))
    left = VixArray.new
    right = VixArray.new

    puts "pivot: #{pivot}"
    puts "self2: #{self}"

    self.count.times do |i|
      if self[i] > pivot
        right << self[i]
      else
        left << self[i]
      end
    end

    puts "left: #{left}"
    puts "right: #{right}"

    return *left.quicksort, pivot, *right.quicksort
  end

  ### Implementation with Ruby syntax to be used as extension to Array Class
  #def quicksort_ruby
  #  return [] if empty?
  #
  #  pivot = delete_at(rand(size))
  #  left, right = partition(&pivot.method(:>))
  #
  #  return *left.quicksort_ruby, pivot, *right.quicksort_ruby
  #end

  def self.randomize(length, min, max)
    VixArray.new(length) { rand(min...max) }
  end

end