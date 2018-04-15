(ns forca.core
  (:gen-class))

(def total-de-vidas 6)
(def palavra-secreta "Piracanjuba")

(defn perdeu [] (print "Você perdeu, otário"))
(defn ganhou [] (print "Você ganhou, mizerávi"))

(defn letras-faltantes [palavra acertos] (remove (fn [letra] (contains? acertos (str letra))) palavra))
(defn acertou-tudo [palavra acertos] (empty? (letras-faltantes palavra acertos)))
(defn le-letra! [] (read-line))
(defn acertou? [palavra chute] (.contains palavra chute))

(defn imprime-forca [vidas palavra acertos]
  (println vidas)
  (doseq [letra (seq palavra)]
    (if (contains? acertos (str letra))
      (print letra " ")
      (print "_ ")))
  (println))

(defn jogo [vidas palavra acertos]
  (imprime-forca vidas palavra acertos)
  (cond
    (= vidas 0) (perdeu)
    (acertou-tudo palavra acertos) (ganhou)
    :else
      (let [chute (le-letra!)]
        (if (acertou? palavra chute)
          (do
            (println "Acertou a letra") 
            (recur vidas palavra (conj acertos chute))
          )
          (do
            (println "Errou a letra")
            (recur (dec vidas) palavra acertos))))))

(defn -main
  [& args]
  (jogo total-de-vidas palavra-secreta #{}))
